document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('#modal');
    const menuIcon = document.querySelector('#menu-icon');
    const navMenu = document.querySelector('nav ul');
    const experienciaItems = document.querySelectorAll('.experiencia-item');
    const experienciaDetails = document.querySelector('#experiencia-details');
    const estudiosItems = document.querySelectorAll('.certificado-item');
    const estudioDetails = document.querySelector('#certificado-details');

    // Mostrar modal al hacer clic en el botón
    const closeModalButton = document.querySelector('.close-modal');
    if (closeModalButton) {
        closeModalButton.addEventListener('click', () => {
            modal.classList.remove('show');
        });
    }

    // Implementar scroll suave en los enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Toggle mobile menu
    if (menuIcon) {
        menuIcon.addEventListener('click', () => {
            navMenu.classList.toggle('show');
        });
    }

    // Información de experiencias
    const experienciasInfo = {
        1: {
            title: "Previred",
            details: "Responsable de la administración y soporte de la infraestructura de red, incluyendo la configuración y mantenimiento de equipos de red multicapa..."
        },
        2: {
            title: "Industrias Textiles ALKA",
            details: "Responsable de la Sublimación y edición de algunos Diseños para la tienda virtual arrecifecolombia y arrecifepuertorico."
        },
        3: {
            title: "Mantenimiento de Equipos de Cómputo - Freelance",
            details: "Brindo servicios de mantenimiento preventivo y correctivo a equipos de cómputo, incluyendo la reparación de hardware, optimización de sistemas operativos..."
        }
    };

    // Mostrar detalles de experiencia
    experienciaItems.forEach(item => {
        item.addEventListener('click', () => {
            experienciaItems.forEach(i => i.classList.remove('selected'));
            item.classList.add('selected');

            const experienciaId = item.getAttribute('data-experiencia');
            const info = experienciasInfo[experienciaId];
            if (info) {
                experienciaDetails.innerHTML = `
                    <h3>${info.title}</h3>
                    <p>${info.details}</p>
                `;
            }
        });
    });

    // Información de certificados
    const certificadoInfo = {
        1: {
            title: "Tecnólogo en Gestión de Redes de Datos",
            details: "Actualmente cursando el programa de Tecnólogo en Gestión de Redes de Datos en el SENA. En la fase de práctica profesional en la empresa Previred, donde estoy aplicando mis conocimientos en redes y gestionando infraestructuras tecnológicas para mejorar la conectividad y la eficiencia de la red."
        },
        2: {
            title:"Ingeniera de Sistemas",
            details:"Actualmente cursando la carrera de Ingeniería de Sistemas en la Universidad Corhuila, en el cuarto semestre. El programa me está brindando una sólida formación en programación, desarrollo de software, administración de sistemas y análisis de datos, preparándome para enfrentar desafíos tecnológicos y contribuir a la innovación en el ámbito de la ingeniería de sistemas.",
        },
        3: {
            title: "Certificación en Diseño Gráfico",
            details: "Completé un curso integral de Diseño Gráfico en el Instituto Micefe en octubre de 2020. El curso me proporcionó habilidades fundamentales en diseño visual, manejo de herramientas gráficas y desarrollo de conceptos creativos, ampliando mi capacidad para comunicar ideas de manera efectiva a través de medios visuales."
        },
    }
        

    // Mostrar detalles de certificado
    estudiosItems.forEach(item => {
        item.addEventListener('click', () => {
            estudiosItems.forEach(i => i.classList.remove('selected'));
            item.classList.add('selected');

            const certificadoId = item.getAttribute('data-certificado');
            const info = certificadoInfo[certificadoId];
            if (info) {
                estudioDetails.innerHTML = `
                    <h3>${info.title}</h3>
                    <p>${info.details}</p>
                `;
            }
        });
    });
});
