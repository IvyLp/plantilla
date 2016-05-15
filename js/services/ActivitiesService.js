(function(){
    angular.module('plantilla')
        .service('Activities', function(){
           this.activitie1 = function(){
                return {
                    title: "¿Según tu percepción que crees que hizo mal la jefe?",
                    items: ["a. No lo mira a los ojos (correcto)","b. Se expresó en un tono de voz inadecuado (incorrecto)","c. No contextualizó a Horacio con respecto a qué y para qué es la Evaluación de Desempeño (correcto)"],
                    answer: 2
                }
           };

           this.activitie4 = function (){
               return {
                   concept:[ 'A. La importancia de desplegar los objetivos estratégicos es que',
                             'B. La Evaluación de Comportamientos permitirá a los funcionarios y líderes',
                             'C. La Elaboración del Plan de Trabajo Individual consiste en',
                             'D. Evaluar el desempeño de un funcionario consiste en',
                             'E. El seguimiento y el acompañamiento que brinda el líder, asegura que'
                            ],
                   definition:[
                       'Reportar los objetivos SMART, de negocio y de desarrollo, que se traza para el año con su respectivo plan de acción.',
                       'Evaluar el cumplimiento de los objetivos y los comportamientos de los funcionarios.',
                       'Los funcionarios  cuenten con orientación oportuna para que puedan cumplir sus objetivos, tomando decisiones y correctivos oportunos.',
                       'Cada funcionario conozca cómo su labor aporta al logro de los objetivos corporativos.',
                       'Conocer las fortalezas y oportunidades de mejora en cuanto a nuestra forma de hacer las cosas, y saber si somos sencillos, confiables y amigables.'
                   ],
                   answer:[2,3,4,0,1]
               }
           }

        });
})();