package com.mycompany.star_colletion;

class Carta {
    String marca;
    int capacidad;
    String motor;
    int caballosFuerza;
    int velocidadMaxima;

    // 🔹 Constructor
    public Carta(String marca, int capacidad, String motor, int caballosFuerza, int velocidadMaxima) {
        this.marca = marca;
        this.capacidad = capacidad;
        this.motor = motor;
        this.caballosFuerza = caballosFuerza;
        this.velocidadMaxima = velocidadMaxima;
    }

    // 🔹 Método para comparar atributos
    public int getAtributo(String atributo) {
        if (atributo == null) return 0;

        switch (atributo.toLowerCase()) {
            case "capacidad": return capacidad;
            case "caballos": return caballosFuerza;
            case "velocidad": return velocidadMaxima;
            default:
                System.out.println("⚠ Atributo inválido");
                return 0;
        }
    }

    // 🔹 Para imprimir la carta
    @Override
    public String toString() {
        return marca + " | " + capacidad + "cc | " + motor +
               " | HP: " + caballosFuerza + " | Vel: " + velocidadMaxima;
    } 
}
