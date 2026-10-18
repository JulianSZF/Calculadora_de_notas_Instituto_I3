# Calculadora de Notas Instituto i3

Aplicación web inspirada en la actividad del [repositorio original](https://github.com/JulianSZF/Calculadora_de_notas_Instituto_I3), con interfaz visual de terminal en tonos verdes. Permite registrar el nombre del estudiante y tres notas de 0 a 5, calcular el promedio simple y mostrar si aprobó. La nota mínima aprobatoria es 3.0.

## Ejecutar la aplicación web

Abre `index.html` en un navegador moderno. No requiere instalación, servidor ni dependencias.

## Archivos

- `index.html`: estructura del formulario estilo terminal.
- `style.css`: tema oscuro con texto verde, detalles de terminal y diseño responsive.
- `script.js`: validación del formulario, cálculo y resultado accesible en pantalla.
- `script.py`: alternativa de línea de comandos en Python, ejecutable con `python script.py`.

El cálculo web usa promedio simple: `(nota1 + nota2 + nota3) / 3`. Las notas deben estar entre 0 y 5; el resultado se anuncia con una región accesible para lectores de pantalla.

## Trabajo colaborativo con Git

Cada integrante parte de `main` actualizado y trabaja en una rama propia. Los commits propuestos son ejemplos para guardar los avances por etapas.

### Integrante 1 — rama `interfaz`

```bash
git switch main
git pull origin main
git switch -c interfaz
# Trabajar en index.html
git add index.html
git commit -m "Se crea la estructura base del formulario principal"
# Completar los campos, botón y región de resultados
git add index.html
git commit -m "Se agrega el formulario de notas con interfaz de terminal"
git push -u origin interfaz
```

### Integrante 2 — rama `logica`

```bash
git switch main
git pull origin main
git switch -c logica
# Implementar captura y validación de las notas en script.js
git add script.js
git commit -m "Se implementa la captura y validación de las notas"
# Añadir el promedio simple y la decisión de aprobación
git add script.js
git commit -m "Se calcula el promedio y se muestra el resultado académico"
git push -u origin logica
```

### Integrante 3 — rama `estilos`

```bash
git switch main
git pull origin main
git switch -c estilos
# Crear el tema de terminal y el diseño responsive en style.css
git add style.css
git commit -m "Se añaden estilos de terminal con código verde"
# Añadir estilos para validación y resultados
git add style.css
git commit -m "Se definen estados visuales para errores y resultados"
git push -u origin estilos
```

### Integrar las ramas en `main`

Después de revisar y publicar las ramas, se pueden integrar en orden:

```bash
git switch main
git pull origin main
git merge --no-ff interfaz -m "Integra la interfaz del formulario"
git merge --no-ff logica -m "Integra la lógica de cálculo de notas"
git merge --no-ff estilos -m "Integra los estilos de terminal"
git push origin main
```

Si el equipo usa pull requests, abre uno por rama hacia `main` y completa el merge en GitHub; en ese flujo, no ejecutes también los merges locales anteriores. Si Git indica conflictos, resuélvelos y crea el commit de merge antes de continuar.
