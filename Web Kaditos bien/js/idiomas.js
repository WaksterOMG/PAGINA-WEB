/* =============================================
   IDIOMAS — Traducciones ES / EU / EN
   Todos los textos de la interfaz (etiquetas,
   títulos de secciones, títulos de pasos…)
   El contenido real de cada sección va
   directamente en el HTML con clases
   .lang-content y IDs lang-{idioma}-{id}
============================================= */

const TRADUCCIONES = {
  es: {
    /* Hero meta */
    lbl_equipo:   'Equipo',
    lbl_modulos:  'Módulos',
    lbl_duracion: 'Duración',
    lbl_curso:    'Curso',
    meta_mods:    'SO · Redes · Montaje · Seguridad · Inglés · Digitalización',
    meta_dur:     '3 semanas',

    /* Sidebar */
    idx_titulo:   'Índice',
    idx_resumen:  'Resumen',
    idx_proc:     'Procedimiento',
    idx_p1:       'Montaje de robots',
    idx_p2:       'Red WiFi segura',
    idx_p3:       'Programación Arduino',
    idx_p4:       'Servidor web',
    idx_p5:       'Contenido multimedia',
    idx_p6:       'Competición',
    idx_prob:     'Problemas',
    idx_conc:     'Conclusiones',

    /* Labels de sección */
    lbl_resumen_sec: 'Resumen del proyecto',
    lbl_proc_sec:    'Qué hicimos paso a paso',
    lbl_prob_sec:    'Lo que no salió a la primera',
    lbl_conc_sec:    'Qué hemos aprendido',

    /* Títulos de pasos */
    p1_tit: 'Montaje de los robots',
    p2_tit: 'Configuración de la red WiFi segura',
    p3_tit: 'Programación Arduino y apps',
    p4_tit: 'Instalación del servidor web',
    p5_tit: 'Contenido multimedia e imagen de marca',
    p6_tit: 'Competición: circuito, peleas y carrera',

    /* Roles miembros */
    rol1_label: 'Conclusión individual',
    rol2_label: 'Conclusión individual',
    rol3_label: 'Conclusión individual',
  },

  eu: {
    lbl_equipo:   'Taldea',
    lbl_modulos:  'Moduluak',
    lbl_duracion: 'Iraupena',
    lbl_curso:    'Ikasturtea',
    meta_mods:    'SE · Sareak · Muntaia · Segurtasuna · Ingelesa · Digitalizazioa',
    meta_dur:     '3 aste',

    idx_titulo:   'Aurkibidea',
    idx_resumen:  'Laburpena',
    idx_proc:     'Prozedura',
    idx_p1:       'Roboten muntaia',
    idx_p2:       'WiFi sare segurua',
    idx_p3:       'Arduino programazioa',
    idx_p4:       'Web zerbitzaria',
    idx_p5:       'Multimedia edukia',
    idx_p6:       'Lehiaketa',
    idx_prob:     'Arazoak',
    idx_conc:     'Ondorioak',

    lbl_resumen_sec: 'Proiektuaren laburpena',
    lbl_proc_sec:    'Zer egin dugun pausoz pauso',
    lbl_prob_sec:    'Lehen saiakera gainditu ez zuena',
    lbl_conc_sec:    'Zer ikasi dugun',

    p1_tit: 'Roboten muntaia',
    p2_tit: 'WiFi sare seguruaren konfigurazioa',
    p3_tit: 'Arduino programazioa eta app-ak',
    p4_tit: 'Web zerbitzariaren instalazioa',
    p5_tit: 'Multimedia edukia eta marka-irudia',
    p6_tit: 'Lehiaketa: zirkuitua, borrokak eta lasterketa',

    rol1_label: 'Norbanako ondorioa',
    rol2_label: 'Norbanako ondorioa',
    rol3_label: 'Norbanako ondorioa',
  },

  en: {
    lbl_equipo:   'Team',
    lbl_modulos:  'Modules',
    lbl_duracion: 'Duration',
    lbl_curso:    'Year',
    meta_mods:    'OS · Networks · Assembly · Security · English · Digitalisation',
    meta_dur:     '3 weeks',

    idx_titulo:   'Index',
    idx_resumen:  'Summary',
    idx_proc:     'Procedure',
    idx_p1:       'Robot assembly',
    idx_p2:       'Secure WiFi network',
    idx_p3:       'Arduino programming',
    idx_p4:       'Web server',
    idx_p5:       'Multimedia content',
    idx_p6:       'Competition',
    idx_prob:     'Problems',
    idx_conc:     'Conclusions',

    lbl_resumen_sec: 'Project summary',
    lbl_proc_sec:    'What we did step by step',
    lbl_prob_sec:    'What did not go right first time',
    lbl_conc_sec:    'What we learned',

    p1_tit: 'Robot assembly',
    p2_tit: 'Secure WiFi network configuration',
    p3_tit: 'Arduino programming and apps',
    p4_tit: 'Web server installation',
    p5_tit: 'Multimedia content and brand identity',
    p6_tit: 'Competition: circuit, fights and race',

    rol1_label: 'Individual conclusion',
    rol2_label: 'Individual conclusion',
    rol3_label: 'Individual conclusion',
  },
};

/* ---- Función principal de cambio de idioma ---- */
function setLang(lang) {
  /* 1. Actualizar botones activos */
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.lang-btn').forEach(b => {
    if (b.textContent === lang.toUpperCase()) b.classList.add('active');
  });

  /* 2. Mostrar/ocultar bloques de contenido por idioma */
  document.querySelectorAll('.lang-content').forEach(el => el.classList.remove('active'));
  document.querySelectorAll(`[id^="lang-${lang}-"]`).forEach(el => el.classList.add('active'));

  /* 3. Actualizar etiquetas por ID */
  const t = TRADUCCIONES[lang];
  Object.keys(t).forEach(k => {
    const el = document.getElementById(k);
    if (el) el.textContent = t[k];
  });

  /* 4. Atributo lang del HTML */
  document.documentElement.lang = lang;
}
