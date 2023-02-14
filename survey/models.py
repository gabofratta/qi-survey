from django.db import models
import datetime

class SmokingSurvey(models.Model):
    # Smoking frequency responses
    EVERY_DAY = 'Todos los días'
    SOME_DAYS = 'Algunos días'
    NEVER = 'Nunca'

    # Number of cigs a day: (text/value, avg of range)
    CIGS_A_DAY_OPTIONS = [('Menos de 5', 5), ('5 a 9', 7), ('10 a 14', 12),
    ('15 a 19', 17), ('20 a 24', 22), ('25 a 29', 27), ('30 a 34', 32),
    ('35 a 39', 37), ('40 a 44', 42), ('45 a 49', 47), ('50 a 54', 52),
    ('55 a 59', 57), ('Más de 60', 60)]

    # Non-number years since quitting
    LESS_THAN_1 = 'Menos de 1'
    MORE_THAN_15 = '15 o Más'

    email = models.CharField(max_length=50, null=True) # For non-socios, unique
    linker = models.CharField(max_length=15, null=True) # ID for socios, unique (URL)
    source = models.CharField(max_length=25) # Source population (URL)
    birth_year = models.CharField(max_length=4)
    has_smoked = models.BooleanField()
    smoking_age_start = models.CharField(max_length=2, null=True)
    smoking_frequency = models.CharField(max_length=25, null=True)
    smoking_full_cigs = models.CharField(max_length=25, null=True)
    smoking_partial_days = models.CharField(max_length=2, null=True)
    smoking_partial_cigs = models.CharField(max_length=25, null=True)
    smoking_former_years = models.CharField(max_length=25, null=True)
    smoking_former_frequency = models.CharField(max_length=25, null=True)
    smoking_former_full_cigs = models.CharField(max_length=25, null=True)
    smoking_former_partial_days = models.CharField(max_length=2, null=True)
    smoking_former_partial_cigs = models.CharField(max_length=25, null=True)
    gender = models.CharField(max_length=25, null=True)
    race = models.CharField(max_length=35, null=True)
    ethnicity = models.CharField(max_length=50, null=True)
    work = models.CharField(max_length=35, null=True)
    income = models.CharField(max_length=35, null=True)
    medical_history = models.TextField(null=True)
    is_incapacitated = models.BooleanField(null=True, default=None)
    zip_code = models.CharField(max_length=5, null=True)

    # Calculate age based on responses; actual value may be one year less
    def age(self):
        return datetime.datetime.now().year - int(self.birth_year)

    # Determine if patient is of screening age (50 to 80)
    def screening_age(self):
        return (self.age() >= 50 and self.age() <= 80)

    # Convert number of days smoking in 30 days to a decimal (two points)
    def days_per_month(self, smoking_days):
        return round(int(smoking_days) / 30, 2)

    # Convert number of cigarettes to packs, defaults to 20 cigs in a pack
    # Uses average value of the cigarette range, returns two decimal points
    def cigs_to_packs(self, cigs, cigs_per_pack=20):
        cig_average = 0
        for cigs_a_day_pair in self.CIGS_A_DAY_OPTIONS:
            if cigs == cigs_a_day_pair[0]:
                cig_average = cigs_a_day_pair[1]
                break
        return round(int(cig_average) / cigs_per_pack, 2)

    # Calculate pack years. Should only be called inside qualifies() method.
    def pack_years(self):
        smoking_years = self.age() - int(self.smoking_age_start)
        days_per_month_mod = 1 # Modifier for 'some day' smokers
        packs_per_day = 0
        # Current, every day smokers
        if self.smoking_frequency == self.EVERY_DAY:
            packs_per_day = self.cigs_to_packs(self.smoking_full_cigs)
        # Current, some day smokers
        elif self.smoking_frequency == self.SOME_DAYS:
            days_per_month_mod = self.days_per_month(self.smoking_partial_days)
            packs_per_day = self.cigs_to_packs(self.smoking_partial_cigs)
        # Former smokers
        elif self.smoking_frequency == self.NEVER:
            # Adjust smoking years depending on when they quit
            if self.smoking_former_years != self.LESS_THAN_1:
                smoking_years -= int(self.smoking_former_years)
            # Every day and some day former smokers
            if self.smoking_former_frequency == self.EVERY_DAY:
                packs_per_day = self.cigs_to_packs(self.smoking_former_full_cigs)
            elif self.smoking_former_frequency == self.SOME_DAYS:
                days_per_month_mod = self.days_per_month(self.smoking_former_partial_days)
                packs_per_day = self.cigs_to_packs(self.smoking_former_partial_cigs)
        return (smoking_years * days_per_month_mod * packs_per_day)

    # Check if lung cancer screening is needed based on responses
    def qualifies(self):
        if not self.has_smoked or self.smoking_former_years == self.MORE_THAN_15: 
            return False
        if not self.screening_age():
            return False
        if self.pack_years() < 20:
            return False
        return True


class SmokingSurveyPrompts(models.Model):
    email = models.TextField()
    birth_year = models.TextField()
    has_smoked = models.TextField()
    smoking_age_start = models.TextField()
    smoking_frequency = models.TextField()
    smoking_full_cigs = models.TextField()
    smoking_partial_days = models.TextField()
    smoking_partial_cigs = models.TextField()
    smoking_former_years = models.TextField()
    smoking_former_frequency = models.TextField()
    smoking_former_full_cigs = models.TextField()
    smoking_former_partial_days = models.TextField()
    smoking_former_partial_cigs = models.TextField()
    gender = models.TextField()
    race = models.TextField()
    ethnicity = models.TextField()
    work = models.TextField()
    income = models.TextField()
    medical_history = models.TextField()
    is_incapacitated = models.TextField()
    zip_code = models.TextField()