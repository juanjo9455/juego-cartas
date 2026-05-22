/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.star_colletion;

/**
 *
 * @author danie
 */
import java.util.Stack;

public class Jugador {

    // 🔹 Atributos
    String codigo;
    String alias;
    int victorias;
    int derrotas;
    Stack<Carta> cartas;

    // 🔹 Constructor
    public Jugador(String codigo, String alias) {
        this.codigo = codigo;
        this.alias = alias;
        this.victorias = 0;
        this.derrotas = 0;
        this.cartas = new Stack<>();
    }

    // 🔹 Recibir carta (push)

    /**
     *
     * @param c
     */
    public void recibirCarta(Carta c) {
        if (c != null) {
            cartas.push(c);
        }
    }

    // 🔹 Jugar carta (pop seguro)

    /**
     *
     * @return
     */
    public Carta jugarCarta() {
        if (!cartas.isEmpty()) {
            return cartas.pop();
        } else {
            System.out.println("⚠ " + alias + " no tiene cartas");
            return null;
        }
    }

    // 🔹 Cantidad de cartas
    public int cantidadCartas() {
        return cartas.size();
    }


    // 🔹 Mostrar información del jugador
    @Override
    public String toString() {
        return "Jugador: " + alias +
               " | Código: " + codigo +
               " | Cartas: " + cartas.size() +
               " | Victorias: " + victorias +
               " | Derrotas: " + derrotas;
    }
}