/* =============================================================
   SITE CONTENT (EN / ES)
   Every text the pages render comes from here. To add a project,
   copy one object in PROJECTS, give it a new unique `id`, and fill
   both languages. Links like awards.html?project=<id> open it.
   ============================================================= */

const PROJECTS = [
  {
    id: "headcount", stage: "jatco", company: "JATCO México", big: "+24 pts",
    award: { en: "QC-STORY · 4TH", es: "QC-STORY · 4.º" },
    title: { en: "Headcount optimization, CVT8 assembly", es: "Optimización de plantilla, ensamble CVT8" },
    summary: { en: "Time studies and line balancing raised operator efficiency (OOE) from 45% to 69%.", es: "Estudios de tiempos y balanceo de línea subieron la eficiencia de operadores (OOE) de 45% a 69%." },
    tags: ["Time study", "Line balancing", "Nissan"],
    where: { en: "Nissan program · CVT8 assembly, Site 1", es: "Programa Nissan · ensamble CVT8, Planta 1" },
    contest: { en: "QC-Story Contest 2025 · 4th place", es: "Concurso QC-Story 2025 · 4.º lugar" },
    problem: { en: "The CVT8 assembly area carried more people than the volume needed. Operator efficiency kept falling month after month and pushed Direct Labor Cost up.", es: "El área de ensamble CVT8 tenía más personal del que pedía el volumen. La eficiencia de operadores bajaba mes con mes y elevaba el Costo de Mano de Obra Directa." },
    solution: { en: "Time studies and line balancing to redistribute work across stations, updated and validated work instructions, and training with Production so operators could take on the reassigned tasks.", es: "Estudios de tiempos y balanceo de línea para redistribuir el trabajo entre estaciones, instrucciones de trabajo actualizadas y validadas, y capacitación junto con Producción para que los operadores asumieran las tareas reasignadas." },
    role: { en: "I validated the time studies, designed the new operator layout, ran ergonomic and walking-distance analysis, tested risk scenarios under different demand, and calculated the impact on Direct Labor Cost.", es: "Validé los estudios de tiempos, diseñé el nuevo layout de operadores, hice análisis ergonómico y de distancias, evalué escenarios de riesgo con distinta demanda y calculé el impacto en Costo de Mano de Obra Directa." },
    bars: { label: { en: "Operator efficiency (OOE)", es: "Eficiencia de operadores (OOE)" }, before: 45, after: 69, unit: "%", max: 100 },
    images: [
      { src: "media/chart-headcount.webp", alt: { en: "Chart: operator efficiency before 45%, after 69%", es: "Gráfica: eficiencia de operadores antes 45%, después 69%" } },
      { src: "media/award-qc-headcount.webp", alt: { en: "Angel with the CVT8 assembly team at JATCO México", es: "Angel con el equipo de ensamble CVT8 en JATCO México" } }
    ]
  },
  {
    id: "scrap", stage: "jatco", company: "JATCO México", big: "−93%",
    award: { en: "QC-STORY · 3RD", es: "QC-STORY · 3.º" },
    title: { en: "Scrap reduction, casting", es: "Reducción de scrap, fundición" },
    summary: { en: "Process trials on injection and cooling cut porosity scrap and removed a temporary inspection crew.", es: "Pruebas de proceso en inyección y enfriamiento redujeron el scrap por porosidad y eliminaron una cuadrilla temporal de inspección." },
    tags: ["Root cause", "Casting", "BRP"],
    where: { en: "BRP program · Casting, Site 1", es: "Programa BRP · Fundición, Planta 1" },
    contest: { en: "QC-Story Contest 2025 · 3rd place", es: "Concurso QC-Story 2025 · 3.er lugar" },
    problem: { en: "Casting had a very high scrap rate, mostly from internal porosity. A temporary inspection station contained it, but the extra people raised Direct Labor Cost and slowed the line.", es: "Fundición tenía una tasa de scrap muy alta, principalmente por porosidad interna. Una estación temporal de inspección lo contenía, pero el personal extra elevaba el Costo de Mano de Obra Directa y frenaba la línea." },
    solution: { en: "Optimization trials on the casting equipment, adjusting key injection and cooling parameters for uniform solidification. Once the process proved stable, a time study backed removing the temporary crew.", es: "Pruebas de optimización en el equipo de fundición, ajustando parámetros clave de inyección y enfriamiento para lograr una solidificación uniforme. Con el proceso estable, un estudio de tiempos respaldó retirar la cuadrilla temporal." },
    role: { en: "I set up the temporary inspection process, validated times and efficiency under abnormal conditions, tracked volume against targets, protected quality during the trials, and led the final validation that supported the workforce reduction.", es: "Monté el proceso temporal de inspección, validé tiempos y eficiencia en condiciones anormales, seguí el volumen contra metas, cuidé la calidad durante las pruebas y lideré la validación final que respaldó la reducción de personal." },
    images: [
      { src: "media/chart-scrap.webp", alt: { en: "Chart: scrap rate before and after the improvement", es: "Gráfica: tasa de scrap antes y después de la mejora" } },
      { src: "media/award-qc-scrap.webp", alt: { en: "Angel with the casting team at JATCO México", es: "Angel con el equipo de fundición en JATCO México" } }
    ]
  },
  {
    id: "segregation", stage: "jatco", company: "JATCO México", big: "+10%",
    award: { en: "QC-STORY · 1ST", es: "QC-STORY · 1.º" },
    title: { en: "Workforce efficiency by model", es: "Eficiencia de mano de obra por modelo" },
    summary: { en: "A method to split OOE by model, so each model's labor cost matches the hours it really uses.", es: "Un método para separar el OOE por modelo, para que el costo de mano de obra de cada modelo refleje las horas que realmente usa." },
    tags: ["Labor cost", "OOE", "Nissan"],
    where: { en: "Casting, Gears and Heat Treatment · Site 1", es: "Fundición, Engranes y Tratamiento Térmico · Planta 1" },
    contest: { en: "QC-Story Contest 2025 · 1st place", es: "Concurso QC-Story 2025 · 1.er lugar" },
    problem: { en: "Direct Labor Cost was calculated per model, but workforce efficiency was reported as one number for all of them. Models with different costs shared the same efficiency, some were penalized, and the plant lost money on wrong allocation.", es: "El Costo de Mano de Obra Directa se calculaba por modelo, pero la eficiencia se reportaba como un solo número para todos. Modelos con costos distintos compartían la misma eficiencia, algunos salían penalizados y la planta perdía dinero por una asignación incorrecta." },
    solution: { en: "Required hours calculated per model as the baseline, and actual worked hours distributed by real production. Cost per model now follows its own efficiency.", es: "Horas requeridas calculadas por modelo como base, y horas trabajadas reales distribuidas según la producción real. El costo por modelo ahora sigue su propia eficiencia." },
    role: { en: "I led it end to end: designed the required-vs-worked hours method, ran months of trials, built the impact and risk calculations, and implemented it.", es: "Lo lideré de principio a fin: diseñé el método de horas requeridas contra trabajadas, corrí meses de pruebas, construí los cálculos de impacto y riesgo, y lo implementé." },
    images: [
      { src: "media/chart-segregation.webp", alt: { en: "Chart: plant efficiency over time, FY24–FY25", es: "Gráfica: eficiencia de planta en el tiempo, FY24–FY25" } },
      { src: "media/award-qc-segregation.webp", alt: { en: "Angel with the QC-Story team at JATCO México", es: "Angel con el equipo del QC-Story en JATCO México" } }
    ]
  },
  {
    id: "oee", stage: "jatco", company: "JATCO México", big: "−200 h",
    award: { en: "DX · 3RD", es: "DX · 3.º" },
    title: { en: "Standard OEE analysis system (BIS)", es: "Sistema estándar de análisis OEE (BIS)" },
    summary: { en: "One official OEE format for the plant: time studies, failures and downtime recorded the same way. 200 man-hours a month saved.", es: "Un formato oficial de OEE para toda la planta: estudios de tiempos, fallas y paros registrados igual. 200 horas-hombre al mes ahorradas." },
    tags: ["OEE", "VBA", "Standard work"],
    where: { en: "All areas · Site 1 & Site 2", es: "Todas las áreas · Planta 1 y Planta 2" },
    contest: { en: "DX Contest FY24 · 3rd place", es: "Concurso DX FY24 · 3.er lugar" },
    problem: { en: "Each area calculated OEE its own way. The data could not be compared, so failures, losses, downtime and costs were hard to measure.", es: "Cada área calculaba el OEE a su manera. Los datos no se podían comparar y era difícil medir fallas, pérdidas, paros y costos." },
    solution: { en: "An official OEE format that records time studies, failure analysis and downtime in one structure, giving consistent OEE, loss and cost results across production and support areas.", es: "Un formato oficial de OEE que registra estudios de tiempos, análisis de fallas y paros en una sola estructura, con resultados consistentes de OEE, pérdidas y costos en producción y áreas de soporte." },
    role: { en: "I designed and built the format, validated it on the floor, implemented it on the production lines and supported its adoption as the plant's official OEE method.", es: "Diseñé y construí el formato, lo validé en piso, lo implementé en las líneas de producción y acompañé su adopción como el método oficial de OEE de la planta." },
    images: [
      { src: "media/chart-oee.webp", alt: { en: "Chart: OEE improvement over time, FY24–FY25", es: "Gráfica: mejora de OEE en el tiempo, FY24–FY25" } },
      { src: "media/award-dx-oee.webp", alt: { en: "Angel holding the DX Competition 3rd place award", es: "Angel con el reconocimiento del 3.er lugar del DX Competition" } }
    ]
  },
  {
    id: "calculator", stage: "jatco", company: "JATCO México", big: "−1,500 h",
    award: { en: "DX · 2ND", es: "DX · 2.º" },
    title: { en: "Automatic headcount calculator", es: "Calculadora automática de plantilla" },
    summary: { en: "A VBA application that sizes headcount from production volume. 1,500 man-hours a month saved across staff, managers and validators.", es: "Una aplicación VBA que calcula la plantilla a partir del volumen de producción. 1,500 horas-hombre al mes ahorradas entre staff, gerentes y validadores." },
    tags: ["VBA", "Headcount", "Nissan"],
    where: { en: "All areas · Site 1 & Site 2", es: "Todas las áreas · Planta 1 y Planta 2" },
    contest: { en: "DX Contest FY23 · 2nd place", es: "Concurso DX FY23 · 2.º lugar" },
    problem: { en: "Headcount by volume was not standardized: inaccurate results, labor-cost losses and hours of manual work from staff, managers and validators.", es: "El cálculo de plantilla por volumen no estaba estandarizado: resultados imprecisos, pérdidas en costo de mano de obra y horas de trabajo manual de staff, gerentes y validadores." },
    solution: { en: "An Excel/VBA application that only asks for input data and returns a precise, consistent headcount for each area.", es: "Una aplicación en Excel/VBA que solo pide los datos de entrada y entrega una plantilla precisa y consistente para cada área." },
    role: { en: "I designed, coded and tested the whole tool, front end and logic, and integrated it into daily operations. It also made overstaffing easier to spot.", es: "Diseñé, programé y probé toda la herramienta, interfaz y lógica, y la integré a la operación diaria. También facilitó detectar exceso de personal." },
    images: [
      { src: "media/award-dx-calculator.webp", alt: { en: "Angel receiving the DX Competition 2nd place award", es: "Angel recibiendo el reconocimiento del 2.º lugar del DX Competition" } }
    ]
  },
  {
    id: "judge", stage: "jatco", company: "JATCO México", big: "+15%",
    title: { en: "Digital OK/NG judgment log", es: "Registro digital de juicios OK/NG" },
    summary: { en: "A touchscreen VBA program replaced paper OK/NG records in casting and protected traceability.", es: "Un programa VBA en pantalla táctil reemplazó los registros OK/NG en papel en fundición y protegió la trazabilidad." },
    tags: ["VBA", "Quality", "Traceability"],
    where: { en: "BRP program · Casting, Site 1", es: "Programa BRP · Fundición, Planta 1" },
    contest: { en: "Intern Contest", es: "Concurso de Practicantes" },
    problem: { en: "Machine judgments (OK/NG) were written on paper. Operators could log wrong results or lose the piece sequence, and with it the product's traceability.", es: "Los juicios de máquina (OK/NG) se anotaban en papel. Los operadores podían registrar mal un resultado o perder la secuencia de piezas, y con ello la trazabilidad del producto." },
    solution: { en: "A VBA program on a touchscreen: operators select each piece's judgment, the system logs the consecutive number, accepts comments and keeps a continuous digital record.", es: "Un programa VBA en pantalla táctil: el operador selecciona el juicio de cada pieza, el sistema registra el consecutivo, acepta comentarios y guarda un registro digital continuo." },
    role: { en: "I led the full cycle: coding, testing, implementation, buying the equipment and integrating it with the quality lab.", es: "Lideré el ciclo completo: programación, pruebas, implementación, compra del equipo e integración con el laboratorio de calidad." },
    images: []
  },
  {
    id: "cost", stage: "jatco", company: "JATCO México", big: "−750 h",
    title: { en: "Direct labor cost forecast", es: "Pronóstico de costo de mano de obra" },
    summary: { en: "A VBA forecast that collects, validates and calculates on its own. 750 man-hours a month saved.", es: "Un pronóstico en VBA que recopila, valida y calcula solo. 750 horas-hombre al mes ahorradas." },
    tags: ["VBA", "Labor cost", "Forecast"],
    where: { en: "All models · Site 1 & Site 2", es: "Todos los modelos · Planta 1 y Planta 2" },
    contest: { en: "Intern Contest", es: "Concurso de Practicantes" },
    problem: { en: "The Direct Labor Cost forecast was built by hand in Excel: slow, often inaccurate, and risky for decisions.", es: "El pronóstico de Costo de Mano de Obra Directa se hacía a mano en Excel: lento, muchas veces impreciso y riesgoso para tomar decisiones." },
    solution: { en: "An Excel/VBA system that pulls data from standardized files, validates it and calculates without user intervention. People only analyze the result.", es: "Un sistema en Excel/VBA que toma los datos de archivos estandarizados, los valida y calcula sin intervención. Las personas solo analizan el resultado." },
    role: { en: "I designed, built and implemented the program, standardized the input formats and ran a three-month validation before full rollout.", es: "Diseñé, construí e implementé el programa, estandaricé los formatos de entrada y corrí una validación de tres meses antes de liberarlo." },
    images: []
  },
  {
    id: "projects", stage: "jatco", company: "JATCO México", big: "+30%",
    title: { en: "Headcount planning for new lines", es: "Planeación de plantilla para líneas nuevas" },
    summary: { en: "A Japan–Mexico validation format so new projects launch with the right direct and support headcount.", es: "Un formato de validación Japón–México para que los proyectos nuevos arranquen con la plantilla directa y de soporte correcta." },
    tags: ["New projects", "Labor cost", "Japan"],
    where: { en: "New projects · JATCO UK & Mexico", es: "Proyectos nuevos · JATCO UK y México" },
    contest: { en: "Sales Monitor design", es: "Diseño del Sales Monitor" },
    problem: { en: "The Sales Monitor for new projects did not include the exact direct headcount, so launches started inefficient and missed Direct Labor Cost targets.", es: "El Sales Monitor de proyectos nuevos no incluía la plantilla directa exacta, así que los arranques empezaban ineficientes y fuera de la meta de Costo de Mano de Obra Directa." },
    solution: { en: "A new validation format, built with Japan, that calculates direct operators and support staff (maintenance, supervisors, leaders) before launch.", es: "Un nuevo formato de validación, construido con Japón, que calcula operadores directos y personal de soporte (mantenimiento, supervisores, líderes) antes del arranque." },
    role: { en: "I created and implemented the format, made it part of project planning, and presented monthly audit reviews with Japan to directors.", es: "Creé e implementé el formato, lo integré a la planeación de proyectos y presenté a directores las revisiones mensuales de auditoría con Japón." },
    images: []
  },
  {
    id: "new_line_calvillo", stage: "calvillo", company: "Flor de Calvillo", big: "+50%",
    title: { en: "Guava candy line automation", es: "Automatización de la línea de dulce de guayaba" },
    summary: { en: "Capacity from 69 to 103.5 pcs/h with 20 → 7 operators per shift, using an adapted bread slicer.", es: "Capacidad de 69 a 103.5 pz/h con 20 → 7 operadores por turno, usando una rebanadora de pan adaptada." },
    tags: ["Automation", "Layout", "OEE"],
    where: { en: "Guava candy line · Calvillo, Aguascalientes", es: "Línea de dulce de guayaba · Calvillo, Aguascalientes" },
    contest: { en: "Line launch · 3 shifts", es: "Arranque de línea · 3 turnos" },
    problem: { en: "The line needed 20 operators per shift to make 69 pcs/h. Demand required 50% more capacity, 103.5 pcs/h, without losing quality.", es: "La línea necesitaba 20 operadores por turno para hacer 69 pz/h. La demanda pedía 50% más capacidad, 103.5 pz/h, sin perder calidad." },
    solution: { en: "A new layout with automated cutting, packing and sealing. The key move: I adapted a bread-slicing machine so the candy, after a tube separates it, is cut into squares without sticking to the blade.", es: "Un nuevo layout con corte, empaque y sellado automáticos. La clave: adapté una rebanadora de pan para que el dulce, después de que un tubo lo separa, se corte en cuadros sin pegarse a la navaja." },
    role: { en: "I planned and led the project: layout design, suppliers and fabrication, equipment validation, capacity, cycle-time, OEE and labor-efficiency studies, and the production standards.", es: "Planeé y lideré el proyecto: diseño del layout, proveedores y fabricación, validación de equipos, estudios de capacidad, tiempo ciclo, OEE y eficiencia de mano de obra, y los estándares de producción." },
    bars: { label: { en: "Operators per shift", es: "Operadores por turno" }, before: 20, after: 7, unit: "", max: 20 },
    extra: { en: "3 shifts: 60 → 21 operators in total, 39 fewer. OEE 90% reached and sustained.", es: "3 turnos: de 60 a 21 operadores en total, 39 menos. OEE de 90% alcanzado y sostenido." },
    images: []
  },
  {
    id: "abc_kpi", stage: "abc", company: "ABC Autolíneas", big: "−51%",
    title: { en: "Fleet KPI system", es: "Sistema de KPIs de flota" },
    summary: { en: "Designed the area's KPIs and the routine around them: days in shop per repair went from 4.3 to 2.1 in four months.", es: "Diseñé los KPIs del área y la rutina alrededor de ellos: los días en taller por correctivo bajaron de 4.3 a 2.1 en cuatro meses." },
    tags: ["KPIs", "Poka-yoke", "Fleet"],
    where: { en: "~250 tractor-trailers · Arteaga, Nuevo Laredo, Reynosa", es: "~250 tractocamiones · Arteaga, Nuevo Laredo, Reynosa" },
    contest: { en: "Jul → Oct 2026", es: "Jul → Oct 2026" },
    problem: { en: "Maintenance decisions were made without shared definitions: no common availability formula, no rule for repeat failures, no weekly view of what entered and left the shop.", es: "Las decisiones de mantenimiento se tomaban sin definiciones comunes: no había una fórmula única de disponibilidad, ni regla para reincidencias, ni una vista semanal de lo que entraba y salía del taller." },
    solution: { en: "A KPI set with fixed rules: availability ≥ 95%, repeat failure ≤ 3% within 3 weeks, weekly release ≥ 90%, days in shop < 2, overdue PM ≤ 3%. Reported weekly to management and used to build poka-yokes against repeat failures.", es: "Un set de KPIs con reglas fijas: disponibilidad ≥ 95%, reincidencia ≤ 3% en 3 semanas, liberación semanal ≥ 90%, días en taller < 2, PM vencidos ≤ 3%. Se reporta cada semana a Gerencia y se usa para crear poka-yokes contra fallas repetidas." },
    role: { en: "I defined the formulas and data-cleaning rules, built the reports, and run the weekly review. Fleet availability rose from 87.3% to 91.3% (≈10 more trucks a day) and preventive rescheduling fell from 64% to 14%.", es: "Definí las fórmulas y las reglas de limpieza de datos, construí los reportes y conduzco la revisión semanal. La disponibilidad subió de 87.3% a 91.3% (≈10 tractos más al día) y la reprogramación de preventivos bajó de 64% a 14%." },
    bars: { label: { en: "Days in shop per repair", es: "Días en taller por correctivo" }, before: 4.3, after: 2.1, unit: " d", max: 4.3 },
    images: []
  },
  {
    id: "abc_app", stage: "abc", company: "ABC Autolíneas", big: "10k+",
    title: { en: "Maintenance web app", es: "App web de mantenimiento" },
    summary: { en: "Replaced an Excel/VBA daily tracker with a web app and database; 10,000+ historical records migrated row by row.", es: "Reemplacé un control diario en Excel/VBA por una app web con base de datos; más de 10,000 registros históricos migrados fila por fila." },
    tags: ["Python", "JavaScript", "Chart.js"],
    where: { en: "Planning team · 3 shops", es: "Equipo de planeación · 3 talleres" },
    contest: { en: "In use daily", es: "En uso diario" },
    problem: { en: "Daily truck status lived in an Excel/VBA file that depended on manual fixes and could not show indicators in real time.", es: "El estatus diario de los tractos vivía en un archivo de Excel/VBA que dependía de ajustes manuales y no podía mostrar indicadores en tiempo real." },
    solution: { en: "A web app with database: daily status per shop, a KPI tab with charts only, a timeline per truck, a preventive calendar (overdue by km and time), component-change log and an auto-generated PM email. Fixed rules, designed to move later into the company's official system with IT.", es: "Una app web con base de datos: estatus diario por taller, pestaña de KPIs solo con gráficas, línea de tiempo por unidad, calendario de preventivos (vencidos por km y tiempo), registro de cambio de componentes y correo de PM generado automáticamente. Reglas fijas, pensada para pasar después al sistema oficial con TI." },
    role: { en: "I designed and built it, migrated the history and trained the planner and analyst who use it every day.", es: "La diseñé y construí, migré el historial y capacité al planeador y al analista que la usan todos los días." },
    images: []
  },
  {
    id: "abc_master", stage: "abc", company: "ABC Autolíneas", big: "237",
    title: { en: "Fleet technical master", es: "Master técnico de la flota" },
    summary: { en: "A spec sheet for every truck, 25 fields each, from almost 0% to 76% complete in one month, every value source-verified.", es: "Una ficha técnica por tracto, 25 campos cada una, de casi 0% a 76% de avance en un mes, cada dato con fuente verificada." },
    tags: ["Data quality", "Parts", "Fleet"],
    where: { en: "237 active trucks", es: "237 unidades activas" },
    contest: { en: "Oct → Nov 2026", es: "Oct → Nov 2026" },
    problem: { en: "Nobody knew with certainty which engine, transmission or part each truck had. PM kits could not be prepared in advance and purchasing errors happened.", es: "Nadie sabía con certeza qué motor, transmisión o refacción llevaba cada tracto. No se podían preparar kits de PM por adelantado y había errores de compra." },
    solution: { en: "A technical master inside the app: engine, transmission, axles, suspension, brakes, tires, fluid capacities and critical part numbers. Values only enter if they match a verifiable source (invoices, plates, VIN decoding, purchase requisitions, OEM sheets).", es: "Un master técnico dentro de la app: motor, transmisión, ejes, suspensión, frenos, llantas, capacidades de fluidos y números de parte críticos. Un dato solo entra si coincide con una fuente verificable (cartas factura, placas, decodificación de VIN, requisiciones, fichas del fabricante)." },
    role: { en: "I built the structure and the quality rule, cross-checked sources, found and corrected wrong records in other systems, and organized the pending field checks by model and engine.", es: "Construí la estructura y la regla de calidad, crucé fuentes, encontré y corregí registros erróneos en otros sistemas, y organicé los pendientes de campo por modelo y motor." },
    bars: { label: { en: "Average completion per truck", es: "Avance promedio por unidad" }, before: 0, after: 76, unit: "%", max: 100 },
    images: []
  }
];

const STAGES = [
  {
    id: "jatco", name: "JATCO México",
    dates: { en: "Jul 2022 – Nov 2025", es: "Jul 2022 – Nov 2025" },
    role: { en: "Intern → Jr IE → Senior IE (skipped a level) · Nissan & BRP programs", es: "Practicante → IE Jr → IE Senior (salté un nivel) · programas Nissan y BRP" },
    metrics: [
      { v: "−93%", k: { en: "Scrap, casting line", es: "Scrap, línea de fundición" }, c: { en: "BRP program · QC-Story 3rd place", es: "Programa BRP · 3.er lugar QC-Story" } },
      { v: "+24 pts", k: { en: "Operator efficiency (OOE)", es: "Eficiencia de operadores (OOE)" }, c: { en: "CVT8 assembly", es: "Ensamble CVT8" }, b: [45, 69], u: "%", max: 100 },
      { v: "1,500+", k: { en: "Man-hours a month removed", es: "Horas-hombre al mes eliminadas" }, c: { en: "VBA headcount calculator · DX 2nd place", es: "Calculadora VBA de plantilla · 2.º lugar DX" } }
    ]
  },
  {
    id: "calvillo", name: "Flor de Calvillo",
    dates: { en: "Nov 2025 – Mar 2026", es: "Nov 2025 – Mar 2026" },
    role: { en: "Senior IE · project contract · new guava candy line, 3 shifts", es: "IE Senior · contrato por proyecto · nueva línea de dulce de guayaba, 3 turnos" },
    metrics: [
      { v: "+50%", k: { en: "Line capacity", es: "Capacidad de línea" }, c: { en: "Pieces per hour", es: "Piezas por hora" }, b: [69, 103.5], u: "", max: 103.5 },
      { v: "−65%", k: { en: "Operators per shift", es: "Operadores por turno" }, c: { en: "39 fewer across 3 shifts", es: "39 menos en 3 turnos" }, b: [20, 7], u: "", max: 20 },
      { v: "90%", k: { en: "OEE reached and sustained", es: "OEE alcanzado y sostenido" }, c: { en: "Adapted bread slicer cuts the candy", es: "Rebanadora de pan adaptada corta el dulce" } }
    ]
  },
  {
    id: "abc", name: "ABC Autolíneas",
    dates: { en: "Mar 2026 – now", es: "Mar 2026 – hoy" },
    role: { en: "General Supervisor, Maintenance & CI · ~250 trucks, 3 shops", es: "Supervisor General, Mantenimiento y MC · ~250 tractos, 3 talleres" },
    metrics: [
      { v: "−51%", k: { en: "Days in shop per repair", es: "Días en taller por correctivo" }, c: { en: "Jul → Oct 2026", es: "Jul → Oct 2026" }, b: [4.3, 2.1], u: " d", max: 4.3 },
      { v: "91%", k: { en: "Fleet availability", es: "Disponibilidad de flota" }, c: { en: "From 87%: ≈10 more trucks a day", es: "Desde 87%: ≈10 tractos más al día" }, b: [87.3, 91.3], u: "%", max: 100 },
      { v: "−50 pts", k: { en: "Preventive rescheduling", es: "Reprogramación de preventivos" }, c: { en: "Jun → Oct 2026", es: "Jun → Oct 2026" }, b: [64, 14], u: "%", max: 100 }
    ]
  }
];

const AWARDS = [
  { place: { en: "1st", es: "1.º" }, contest: "QC-Story 2025", what: { en: "Workforce efficiency by model", es: "Eficiencia de mano de obra por modelo" }, img: "media/award-qc-segregation.webp", project: "segregation" },
  { place: { en: "2nd", es: "2.º" }, contest: "DX Contest FY23", what: { en: "Automatic headcount calculator", es: "Calculadora automática de plantilla" }, img: "media/award-dx-calculator.webp", project: "calculator" },
  { place: { en: "3rd", es: "3.º" }, contest: "DX Contest FY24", what: { en: "Standard OEE analysis system", es: "Sistema estándar de análisis OEE" }, img: "media/award-dx-oee.webp", project: "oee" },
  { place: { en: "3rd", es: "3.º" }, contest: "QC-Story 2025", what: { en: "Scrap reduction, casting", es: "Reducción de scrap, fundición" }, img: "media/award-qc-scrap.webp", project: "scrap" },
  { place: { en: "4th", es: "4.º" }, contest: "QC-Story 2025", what: { en: "Headcount optimization, assembly", es: "Optimización de plantilla, ensamble" }, img: "media/award-qc-headcount.webp", project: "headcount" }
];

const EXPERIENCE = [
  {
    company: "ABC Autolíneas (Grupo Ximple)", logo: "media/logo-abc.webp", stage: "abc",
    role: { en: "General Supervisor · Preventive & Corrective Maintenance, Continuous Improvement", es: "Supervisor General · Mantenimiento Preventivo, Correctivo y Mejora Continua" },
    dates: { en: "Mar 2026 – present", es: "Mar 2026 – actual" },
    place: { en: "Arteaga, Coahuila · fixed-term contract", es: "Arteaga, Coahuila · contrato determinado" },
    summary: { en: "I run maintenance and continuous improvement for a fleet of about 250 tractor-trailers across three shops (Arteaga, Nuevo Laredo, Reynosa): corrective, preventive, tires and roadside rescue. Corrective joined my scope in July 2026.", es: "Llevo mantenimiento y mejora continua de una flota de unos 250 tractocamiones en tres talleres (Arteaga, Nuevo Laredo, Reynosa): correctivo, preventivo, llantas y rescates carreteros. El correctivo se sumó a mi alcance en julio de 2026." },
    points: {
      en: ["Cut days in shop per repair by 51% (4.3 → 2.1) and raised fleet availability from 87.3% to 91.3% in four months.", "Brought preventive rescheduling from 64% to 14% and weekly PM plan compliance from 86% to 98–100%.", "Kept weekly release compliance above the 90% target three months in a row (from 84%).", "Moved the maintenance tracker from Excel/VBA to a web app with database; 10,000+ historical records migrated.", "Designed the area's KPI system and a 24/7 roadside-rescue coverage model."],
      es: ["Reduje 51% los días en taller por correctivo (4.3 → 2.1) y subí la disponibilidad de 87.3% a 91.3% en cuatro meses.", "Bajé la reprogramación de preventivos de 64% a 14% y llevé el cumplimiento del plan semanal de PM de 86% a 98–100%.", "Mantuve la liberación semanal arriba de la meta de 90% tres meses seguidos (desde 84%).", "Pasé el control de mantenimiento de Excel/VBA a una app web con base de datos; más de 10,000 registros migrados.", "Diseñé el sistema de KPIs del área y un modelo de cobertura 24/7 para rescates carreteros."]
    },
    skills: ["KPIs", "Python", "Power Query", "Excel / VBA", "PDCA", "Poka-yoke"],
    projects: ["abc_kpi", "abc_app", "abc_master"]
  },
  {
    company: "Flor de Calvillo", logo: "media/logo-calvillo.webp", stage: "calvillo",
    role: { en: "Senior Industrial Engineer · Production & IE", es: "Ingeniero Industrial Senior · Producción e IE" },
    dates: { en: "Nov 2025 – Mar 2026", es: "Nov 2025 – Mar 2026" },
    place: { en: "Calvillo, Aguascalientes · project contract", es: "Calvillo, Aguascalientes · contrato por proyecto" },
    summary: { en: "I launched and optimized a guava candy line: equipment selection and installation, process development, quality controls and preventive maintenance.", es: "Arranqué y optimicé una línea de dulce de guayaba: selección e instalación de equipos, desarrollo del proceso, controles de calidad y mantenimiento preventivo." },
    points: {
      en: ["Raised capacity 50% (69 → 103.5 pcs/h) while going from 20 to 7 operators per shift; 39 fewer across 3 shifts.", "Adapted a bread-slicing machine to cut the sticky candy into squares automatically.", "Designed and implemented the new packing layout.", "Reached and sustained 90% OEE with standard work and preventive maintenance."],
      es: ["Subí 50% la capacidad (69 → 103.5 pz/h) pasando de 20 a 7 operadores por turno; 39 menos en 3 turnos.", "Adapté una rebanadora de pan para cortar el dulce pegajoso en cuadros de forma automática.", "Diseñé e implementé el nuevo layout de empaque.", "Alcancé y sostuve 90% de OEE con trabajo estandarizado y mantenimiento preventivo."]
    },
    skills: ["Lean", "Layout design", "Automation", "OEE", "Standard work"],
    projects: ["new_line_calvillo"]
  },
  {
    company: "JATCO México", logo: "media/logo-jatco.webp", stage: "jatco",
    role: { en: "Industrial Engineer → Senior Industrial Engineer", es: "Ingeniero Industrial → Ingeniero Industrial Senior" },
    dates: { en: "Dec 2022 – Nov 2025", es: "Dic 2022 – Nov 2025" },
    place: { en: "Aguascalientes · permanent", es: "Aguascalientes · indeterminado" },
    summary: { en: "Continuous improvement, automation and labor-cost work for Nissan and BRP programs. Promoted from Jr to Senior in March 2025, skipping the intermediate level, after a direct-labor-cost model by platform presented to Nissan Japan leadership.", es: "Mejora continua, automatización y costo de mano de obra para programas de Nissan y BRP. Ascendido de Jr a Senior en marzo de 2025, saltando el nivel intermedio, tras un modelo de costo de mano de obra directa por plataforma presentado a la dirección de Nissan Japón." },
    points: {
      en: ["Led line-efficiency and Direct Labor Cost problems: OOE, headcount by volume, Design Standard Time and line actual time.", "Five contest placements: QC-Story 1st, 3rd and 4th; DX 2nd and 3rd.", "Built the VBA tools the plant used for headcount, OEE and cost forecasting.", "Coordinated improvement projects with Japan and set headcount budgets for new lines.", "Trained staff and operators in industrial-engineering tools."],
      es: ["Lideré problemas de eficiencia de línea y Costo de Mano de Obra Directa: OOE, plantilla por volumen, Design Standard Time y tiempo real de línea.", "Cinco lugares en concursos: QC-Story 1.º, 3.º y 4.º; DX 2.º y 3.º.", "Construí las herramientas VBA que la planta usó para plantilla, OEE y pronóstico de costos.", "Coordiné proyectos de mejora con Japón y definí presupuestos de plantilla para líneas nuevas.", "Capacité a staff y operadores en herramientas de ingeniería industrial."]
    },
    skills: ["Time study", "MODAPTS", "OEE / OOE", "Line balancing", "Direct Labor Cost", "Kaizen", "VBA"],
    projects: ["segregation", "scrap", "headcount", "calculator", "oee", "cost", "judge", "projects"]
  },
  {
    company: "JATCO México", logo: "media/logo-jatco.webp", stage: "jatco",
    role: { en: "Quality Intern", es: "Practicante de Calidad" },
    dates: { en: "Jul 2022 – Dec 2022", es: "Jul 2022 – Dic 2022" },
    place: { en: "Aguascalientes · internship", es: "Aguascalientes · prácticas" },
    summary: { en: "I built a VBA database to manage gauge-calibration records, with automatic reports and alerts so no calibration date was missed.", es: "Construí una base de datos en VBA para administrar los registros de calibración de instrumentos, con reportes y alertas automáticas para no perder ninguna fecha." },
    points: {
      en: ["Calibration tracking with real-time updates, history and compliance alerts.", "Supported non-conformity analysis and CAPA.", "Kept quality documentation aligned with ISO requirements."],
      es: ["Control de calibraciones con actualización en tiempo real, historial y alertas de cumplimiento.", "Apoyé el análisis de no conformidades y CAPA.", "Mantuve la documentación de calidad alineada a requisitos ISO."]
    },
    skills: ["Metrology", "7 quality tools", "Core Tools", "VBA"],
    projects: []
  },
  {
    company: "Serna's Trucking", logo: "media/logo-sernas.webp", stage: null,
    role: { en: "Process Engineer · Kaizen (remote)", es: "Ingeniero de Procesos · Kaizen (remoto)" },
    dates: { en: "Sep 2021 – Dec 2021", es: "Sep 2021 – Dic 2021" },
    place: { en: "San Marcos, Texas, USA · full time", es: "San Marcos, Texas, EUA · tiempo completo" },
    summary: { en: "Digital inventory control and process standardization for a trucking company, working in English.", es: "Control digital de inventario y estandarización de procesos para una empresa de transporte, trabajando en inglés." },
    points: {
      en: ["Implemented digital inventory control with real-time tracking.", "Created standard operation sheets and flowcharts to find improvement opportunities.", "Translated technical workbooks for cross-department use."],
      es: ["Implementé control digital de inventario con seguimiento en tiempo real.", "Creé hojas de operación estándar y diagramas de flujo para encontrar oportunidades de mejora.", "Traduje manuales técnicos para uso entre departamentos."]
    },
    skills: ["5S", "FMEA", "Layout", "Lean"],
    projects: []
  },
  {
    company: "Université de Lille (IUT)", logo: "media/logo-lille.webp", stage: null,
    role: { en: "Industrial Engineering Intern", es: "Practicante de Ingeniería Industrial" },
    dates: { en: "Jan 2021 – Jul 2021", es: "Ene 2021 – Jul 2021" },
    place: { en: "Villeneuve-d'Ascq, Lille, France", es: "Villeneuve-d'Ascq, Lille, Francia" },
    summary: { en: "I built a mechanical load simulator that lets students see how different loads affect machine behavior.", es: "Construí un simulador de cargas mecánicas para que los estudiantes vean cómo distintas cargas afectan el comportamiento de una máquina." },
    points: {
      en: ["Designed and prototyped the simulator for classroom demonstrations.", "Worked in an international team, in French and English."],
      es: ["Diseñé y prototipé el simulador para demostraciones en clase.", "Trabajé en un equipo internacional, en francés e inglés."]
    },
    skills: ["Technical design", "Prototyping", "Teamwork"],
    projects: []
  }
];

const EDUCATION = [
  {
    school: "EBAC Latam", logo: "media/logo-ebac.webp",
    degree: { en: "Diploma · Full-Stack Developer with Python", es: "Diplomado · Desarrollador Full-Stack con Python" },
    dates: { en: "2024 – 2026 · in progress", es: "2024 – 2026 · en curso" },
    text: { en: "Front end and back end with Python. I already apply it at work, in the maintenance web app, and in this site.", es: "Front end y back end con Python. Ya lo aplico en el trabajo, en la app web de mantenimiento, y en este sitio." },
    skills: ["Python", "HTML", "CSS / SCSS", "JavaScript", "TypeScript", "React", "Node.js", "Git & GitHub", "SQL", "GitHub Pages"]
  },
  {
    school: { en: "Technological University of Aguascalientes (UTA)", es: "Universidad Tecnológica de Aguascalientes (UTA)" }, logo: "media/logo-uta.webp",
    degree: { en: "B.Eng. Industrial Engineering (Productive Systems)", es: "Ingeniería en Sistemas Productivos (Ingeniería Industrial)" },
    dates: { en: "2021 – 2023", es: "2021 – 2023" },
    text: { en: "Production-system optimization applied to real projects at JATCO: hours segregated by model and labor-cost reduction in casting and assembly.", es: "Optimización de sistemas productivos aplicada a proyectos reales en JATCO: segregación de horas por modelo y reducción de costo de mano de obra en fundición y ensamble." },
    skills: ["Lean & Kaizen", "OEE & KPIs", "Direct Labor Cost", "Line balancing", "Plant layout", "AVIX", "MES / MRP"]
  },
  {
    school: "Université de Lille (IUT)", logo: "media/logo-lille.webp",
    degree: { en: "Postgraduate · Measurement, Quality and Industrial Automation", es: "Posgrado · Medición, Calidad y Automatización Industrial" },
    dates: { en: "2020 – 2021 · France", es: "2020 – 2021 · Francia" },
    text: { en: "A year in France on metrology, quality systems and automation, with industrial simulators and instrumentation. VBA course passed with distinction.", es: "Un año en Francia de metrología, sistemas de calidad y automatización, con simuladores industriales e instrumentación. Curso de VBA aprobado con distinción." },
    skills: ["Metrology", "SPC", "Instrumentation", "Automation", "VBA", "French B2"]
  },
  {
    school: { en: "Technological University of Aguascalientes (UTA)", es: "Universidad Tecnológica de Aguascalientes (UTA)" }, logo: "media/logo-uta.webp",
    degree: { en: "Higher University Technician · Industrial Processes, Manufacturing", es: "Técnico Superior Universitario · Procesos Industriales, Área Manufactura" },
    dates: { en: "2018 – 2020", es: "2018 – 2020" },
    text: { en: "The base: manufacturing processes, work measurement and quality control, with hands-on productivity projects.", es: "La base: procesos de manufactura, medición del trabajo y control de calidad, con proyectos prácticos de productividad." },
    skills: ["Time & motion study", "Process control", "5S", "Lean basics", "Technical documentation", "Excel"]
  }
];

// group: "lean" | "lead" | "tools"   ·   img: certificate image in media/certs/ (null = no image yet)
const CERT_GROUPS = [
  ["lean", { en: "Lean & quality", es: "Lean y calidad" }],
  ["lead", { en: "Leadership", es: "Liderazgo" }],
  ["tools", { en: "Data & tools", es: "Datos y herramientas" }]
];

const CERTS = [
  { group: "lean", name: "Lean Six Sigma Yellow Belt", by: "International Lean Six Sigma", date: { en: "Sep 2025", es: "Sep 2025" }, status: "done", img: null, skills: ["DMAIC", "Lean Six Sigma", "Process improvement"] },
  { group: "lean", name: "Lean Productive Staff", by: "JATCO México", date: { en: "Jul 2025", es: "Jul 2025" }, status: "done", img: null, skills: ["Direct cost", "Total working time", "Budget"] },
  { group: "lean", name: "Automotive Core Tools", by: "JATCO México", date: { en: "Sep 2024", es: "Sep 2024" }, status: "done", img: null, skills: ["APQP", "FMEA", "SPC"] },
  { group: "lean", name: "Lean Six Sigma White Belt", by: "International Lean Six Sigma", date: { en: "Jun 2024", es: "Jun 2024" }, status: "done", img: null, skills: ["Lean Six Sigma basics", "Teamwork"] },
  { group: "lean", name: { en: "Lean Manufacturing & Continuous Improvement", es: "Manufactura Esbelta y Mejora Continua" }, by: { en: "JATCO México · internal", es: "JATCO México · interna" }, date: { en: "2025", es: "2025" }, status: "done", img: null, skills: ["Waste reduction", "Standardization"] },
  { group: "lean", name: { en: "7 Quality Tools", es: "7 Herramientas de Calidad" }, by: { en: "JATCO México · internal", es: "JATCO México · interna" }, date: { en: "2024", es: "2024" }, status: "done", img: null, skills: ["Pareto", "Control charts", "Root cause"] },
  { group: "lean", name: { en: "Kaizen & Problem Solving", es: "Kaizen y Solución de Problemas" }, by: { en: "JATCO México · internal", es: "JATCO México · interna" }, date: { en: "2024", es: "2024" }, status: "done", img: null, skills: ["Kaizen events", "5 Whys", "Ishikawa", "PDCA"] },
  { group: "lead", name: { en: "Emotional Intelligence & Conflict Resolution", es: "Inteligencia Emocional y Resolución de Conflictos" }, by: "JATCO México", date: { en: "Jan 2024", es: "Ene 2024" }, status: "done", img: null,
    text: { en: "Managing a team's emotions under pressure and resolving disagreements collaboratively, with empathy and care for people's wellbeing.", es: "Gestionar las emociones del equipo bajo presión y resolver desacuerdos de forma colaborativa, con empatía y cuidando el bienestar de las personas." },
    skills: ["Conflict management", "Team climate"] },
  { group: "lead", name: { en: "Talent Management & Coaching", es: "Gestión del Talento y Coaching" }, by: "JATCO México", date: { en: "Oct 2023", es: "Oct 2023" }, status: "done", img: null,
    text: { en: "Coaching tools to find each person's strengths, help them reach their goals and align their growth with the company's objectives.", es: "Herramientas de coaching para identificar las fortalezas de cada persona, ayudarla a lograr sus metas y alinear su desarrollo con los objetivos de la empresa." },
    skills: ["People development", "Coaching"] },
  { group: "lead", name: { en: "Empathetic Leadership & Communication", es: "Liderazgo Empático y Comunicación" }, by: "JATCO México", date: { en: "Apr 2023", es: "Abr 2023" }, status: "done", img: null,
    text: { en: "Closer, more effective leadership: active listening, constructive feedback and relationships built on mutual trust.", es: "Un liderazgo más cercano y efectivo: escucha activa, retroalimentación constructiva y relaciones basadas en la confianza mutua." },
    skills: ["Team leadership", "Feedback"] },
  { group: "lean", name: { en: "Process Analysis & Efficiency Improvement", es: "Análisis de Procesos y Mejora de Eficiencia" }, by: { en: "Nissan · academic collaboration", es: "Nissan · colaboración académica" }, date: { en: "2023", es: "2023" }, status: "done", img: null, skills: ["Time & motion", "Process mapping", "Labor cost"] },
  { group: "tools", name: { en: "Full-Stack Developer with Python", es: "Desarrollador Full-Stack con Python" }, by: "EBAC Latam", date: { en: "2026", es: "2026" }, status: "progress", img: null, skills: ["Python", "Web development", "Databases"] },
  { group: "tools", name: { en: "Big Data Visualization", es: "Visualizador de Big Data" }, by: { en: "Capacítate para el Empleo (Fundación Carlos Slim)", es: "Capacítate para el Empleo (Fundación Carlos Slim)" }, date: { en: "Sep 2022", es: "Sep 2022" }, status: "done", img: null, skills: ["Data visualization", "Dashboards"] },
  { group: "tools", name: { en: "Project Formulation & Evaluation", es: "Formulación y Evaluación de Proyectos" }, by: { en: "Capacítate para el Empleo (Fundación Carlos Slim)", es: "Capacítate para el Empleo (Fundación Carlos Slim)" }, date: { en: "May 2022", es: "May 2022" }, status: "done", img: null, skills: ["Project evaluation", "Feasibility"] },
  { group: "tools", name: { en: "VBA training certificate", es: "Certificado de formación en VBA" }, by: "Université de Lille", date: { en: "May 2021", es: "May 2021" }, status: "done", img: null, id: "0CSP5V05K06", skills: ["VBA", "Excel automation"] }
];

const LANGUAGES = [
  { name: { en: "Spanish", es: "Español" }, level: { en: "Native", es: "Nativo" } },
  { name: { en: "English", es: "Inglés" }, level: { en: "B2 · professional, daily work with US and Japan teams", es: "B2 · profesional, trabajo diario con equipos de EUA y Japón" } },
  { name: { en: "French", es: "Francés" }, level: { en: "B2 · one year living and studying in Lille", es: "B2 · un año viviendo y estudiando en Lille" } }
];
