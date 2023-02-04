Survey.StylesManager.applyTheme("defaultV2");
Survey.surveyLocalization.defaultLocale = "es"; // Language: Spanish

var surveyJSON = {"logoPosition":"right","pages":[{"name":"page1","elements":[{"type":"dropdown","name":"birth_year","title":"Ingrese su fecha de nacimiento, solo el año.","isRequired":true,"choices":["2022","2021","2020","2019","2018","2017","2016","2015","2014","2013","2012","2011","2010","2009","2008","2007","2006","2005","2004","2003","2002","2001","2000","1999","1998","1997","1996","1995","1994","1993","1992","1991","1990","1989","1988","1987","1986","1985","1984","1983","1982","1981","1980","1979","1978","1977","1976","1975","1974","1973","1972","1971","1970","1969","1968","1967","1966","1965","1964","1963","1962","1961","1960","1959","1958","1957","1956","1955","1954","1953","1952","1951","1950","1949","1948","1947","1946","1945","1944","1943","1942","1941","1940","1939","1938","1937","1936","1935","1934","1933","1932","1931","1930","1929","1928","1927","1926","1925","1924","1923","1922","1921","1920","1919","1918","1917","1916","1915","1914","1913","1912","1911","1910","1909","1908","1907","1906","1905","1904","1903","1902","1901","1900"]},{"type":"boolean","name":"has_smoked","title":"¿Ha fumado al menos 100 cigarrillos en TODA SU VIDA?","isRequired":true,"labelTrue":"Sí"}]},{"name":"page2","elements":[{"type":"dropdown","name":"smoking_age_start","visible":false,"visibleIf":"{has_smoked} = true","title":"¿Qué edad tenía cuando COMENZO a fumar con regularidad?","requiredIf":"{has_smoked} = true","choices":["10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","60","61","62","63","64","65","66","67","68","69","70","71","72","73","74","75"]},{"type":"radiogroup","name":"smoking_frequency","visible":false,"visibleIf":"{has_smoked} = true","title":"¿ACTUALMENTE fuma cigarrillos todos los días, algunos días, o nunca? ","requiredIf":"{has_smoked} = true","choices":["Todos los días","Algunos días","Nunca"]}]},{"name":"page3","elements":[{"type":"dropdown","name":"smoking_full_ppd","visible":false,"visibleIf":"{smoking_frequency} = 'Todos los días'","title":"En promedio, ¿cuántos cigarrillos fuma ACTUALMENTE por día?","requiredIf":"{smoking_frequency} = 'Todos los días'","choices":["Menos de 5","5 a 9","10 a 14","15 a 19","20 a 24","25 a 29","30 a 34","35 a 39","40 a 44","45 a 49","50 a 54","55 a 59","Más de 60"]}]},{"name":"page4","elements":[{"type":"dropdown","name":"smoking_partial_days","visible":false,"visibleIf":"{smoking_frequency} = 'Algunos días'","title":"En los últimos 30 días, ¿cuántos días fumó al menos un cigarrillo?","requiredIf":"{smoking_frequency} = 'Algunos días'","choices":["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23",{"value":" 24","text":"24"},"25","26","27","28","29","30"],"placeholder":"Select..."},{"type":"dropdown","name":"smoking_partial_ppd","visible":false,"visibleIf":"{smoking_frequency} = 'Algunos días'","title":"En promedio, cuando fumó en los últimos 30 días, ¿cuántos cigarrillos fumó por día?","requiredIf":"{smoking_frequency} = 'Algunos días'","choices":["Menos de 5","5 a 9","10 a 14","15 a 19","20 a 24","25 a 29","30 a 34","35 a 39","40 a 44","45 a 49","50 a 54","55 a 59","Más de 60"]}]},{"name":"page5","elements":[{"type":"dropdown","name":"smoking_former_years","visible":false,"visibleIf":"{smoking_frequency} = 'Nunca'","title":"¿Cuánto tiempo hace que dejó de fumar cigarrillos? (Años)","requiredIf":"{smoking_frequency} = 'Nunca'","choices":["Menos de 1","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15 o Más"]}]},{"name":"page6","elements":[{"type":"radiogroup","name":"smoking_former_frequency","visible":false,"visibleIf":"{smoking_former_years} anyof ['Menos de 1', '1', '2', '3', '4', '5', '6', '7', '14', '13', '12', '11', '10', '9', '8']","title":"¿Cuando fumaba lo hacía todos los días o algunos días? ","requiredIf":"{smoking_former_years} anyof ['Menos de 1', '1', '2', '3', '4', '5', '6', '7', '14', '13', '12', '11', '10', '9', '8']","choices":["Todos los días","Algunos días"]}]},{"name":"page7","elements":[{"type":"dropdown","name":"smoking_former_full_ppd","visible":false,"visibleIf":"{smoking_former_frequency} = 'Todos los días'","title":"En promedio, ¿cuántos cigarrillos fumaba por día?","requiredIf":"{smoking_former_frequency} = 'Todos los días'","choices":[{"value":"Less than 5","text":"Menos de 5"},{"value":"5 to 9","text":"5 a 9"},{"value":"10 to 14","text":"10 a 14"},{"value":"15 to 19","text":"15 a 19"},{"value":"20 to 24","text":"20 a 24"},{"value":"25 to 29","text":"25 a 29"},{"value":"30 to 34","text":"30 a 34"},{"value":"35 to 39","text":"35 a 39"},{"value":"40 to 44","text":"40 a 44"},{"value":"45 to 49","text":"45 a 49"},{"value":"50 to 54","text":"50 a 54"},{"value":"55 to 59","text":"55 a 59"},{"value":"More than 60","text":"Más de 60"}]}]},{"name":"page8","elements":[{"type":"dropdown","name":"smoking_former_partial_days","visible":false,"visibleIf":"{smoking_former_frequency} = 'Algunos días'","title":"Cuando fumaba, ¿cuántos días en un mes promedio fumó al menos un cigarrillo?","requiredIf":"{smoking_former_frequency} = 'Algunos días'","choices":["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"]},{"type":"dropdown","name":"smoking_former_partial_ppd","visible":false,"visibleIf":"{smoking_former_frequency} = 'Algunos días'","title":"¿Cuántos cigarrillos fumaba por día?","requiredIf":"{smoking_former_frequency} = 'Algunos días'","choices":["Menos de 5","5 a 9","10 a 14","15 a 19","20 a 24","25 a 29","30 a 34","35 a 39","40 a 44","45 a 49","50 a 54","55 a 59","Más de 60"]}]},{"name":"page9","elements":[{"type":"radiogroup","name":"gender","title":"Género","choices":["Masculino","Femenino"]},{"type":"radiogroup","name":"race","title":"Raza","choices":["Blanco","Negro o Afro Americano","Asiático","Indio Americano"]},{"type":"radiogroup","name":"ethnicity","title":"Etnicidad","choices":["Hispano, Latino, o de Origen Español","No Hispano, Latino, o de Origen Español"]},{"type":"radiogroup","name":"work","title":"Empleo","choices":["Empleado a Tiempo Completo","Empleado a Tiempo Parcial","Negocio Propio","Retirado","No Trabaja"]},{"type":"dropdown","name":"income","title":"Nivel de Ingreso","choices":["Menos de $15,000","$15,000 a $29,999","$30,000 a $44,999","$45,000 a $59,999","Más de $60,000"]},{"type":"checkbox","name":"medical_history","title":"¿Usted padece de algunas de las siguientes condiciones de salud? (Seleccione todas las que apliquen)","choices":["Diabetes","Hypertensión","Ansiedad o Depresión","Cáncer","Enfermedad Cardiovascular","Asma","COPD o Emphysema"]},{"type":"boolean","name":"is_incapacitated","title":"¿Está usted incapacitado?","labelTrue":"Sí"},{"type":"text","name":"zip_code","title":"Código postal","validators":[{"type":"text","text":"Ingrese un código postal de 5 dígitos","minLength":5,"maxLength":5},{"type":"numeric"}]}]}]};

// Send data to server
function sendDataToServer(survey) {
    // Store CSRF token
    $.ajaxSetup({
      headers: { "X-CSRFToken": CSRF_TOKEN }
    });

    // Store linker and source
    survey_data = survey.data;
    survey_data['linker'] = linker;
    survey_data['source'] = source;

    // Convert medical history array to string
    if ('medical_history' in survey_data) {
      survey_data['medical_history'] = survey_data['medical_history'].join(', ');
    }
    
    // console.log(JSON.stringify(survey_data)); // DEBUG

    // Ajax POST request
    $.ajax({
        url: "/ajax/post_response",
        type: "POST",
        data: survey_data,
        dataType: 'json',
        success: function(data, status) {
            console.log(data.success);
        },
        error: function(xhr, errmsg, err) {
            alert("Unexpected error. Reload the page and try again.");
            console.log(err);
        }
    });
}

// SurveyJS handler
var survey = new Survey.Model(surveyJSON);

$("#surveyContainer").Survey({
  model: survey,
  onComplete: sendDataToServer
});