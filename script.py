# Calculadora de Notas - Instituto i3

NOTA_MINIMA = 3.0


def ingresar_nota(numero):
    """Solicita y valida una nota entre 0 y 5."""

    while True:
        try:
            nota = float(input(f"Ingrese la nota {numero} (0 a 5): "))

            if 0 <= nota <= 5:
                return nota

            print("Error: la nota debe estar entre 0 y 5.")

        except ValueError:
            print("Error: debes ingresar un número válido.")


def calcular_promedio(nota1, nota2, nota3):
    """Calcula el promedio de las tres notas."""

    return (nota1 + nota2 + nota3) / 3


def main():
    print("=" * 40)
    print("   INSTITUTO I3 - CALCULADORA DE NOTAS")
    print("=" * 40)

    nombre = input("Nombre del estudiante: ").strip()

    while not nombre:
        print("Error: el nombre no puede estar vacío.")
        nombre = input("Nombre del estudiante: ").strip()

    nota1 = ingresar_nota(1)
    nota2 = ingresar_nota(2)
    nota3 = ingresar_nota(3)

    promedio = calcular_promedio(nota1, nota2, nota3)

    print("\n" + "=" * 40)
    print(f"Estudiante: {nombre}")
    print(f"Nota 1: {nota1:.2f}")
    print(f"Nota 2: {nota2:.2f}")
    print(f"Nota 3: {nota3:.2f}")
    print(f"Promedio: {promedio:.2f}")

    if promedio >= NOTA_MINIMA:
        print("Resultado: APROBÓ")
    else:
        print("Resultado: REPROBÓ")

    print("=" * 40)


if __name__ == "__main__":
    main()