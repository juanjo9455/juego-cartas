/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.star_colletion;

/**
 *
 * @author danie
 */
public class Cola {
    private int maxsize;//tamaño maximo del almacenamiento
    private int size;//contador de nodos para que no se pase de maximo tamaño
    private  Nodo Final,Front,q;//apuntador a la cabeza de la fila y  apuntador a la cola de la fila y q auxiliar
    

    public Cola()
    {
    }
    public Cola(int n)
    {
        maxsize=n;
        Final=null;
        Front=null;
        size=0;
        
    }
        
    public boolean IsEmpty() 
    {
        if(size<= 0)
            return true;
        else
            return false;
    }

    public boolean IsFull() 
    {
        if(size>=maxsize)
            return true;
        else 
            return false;
    }
           
    public void Push(Object d)
    {
        if (IsFull()==false)
        { 
            size=size+ 1;
            q=new Nodo(d);
            if(Front==null)
               {
                Front=q;
                Final=q;
                }
             else
                {
                 Final.setSig(q);
                 Final=q;
                }
        }
        else
        {
         System.out.println("*****Pila LLena DESBORDAMIENTO DE PILA*****");
        }
    }
    
    public Object Pop()
    {
        Object d=null;
        if (IsEmpty()==false)
        {
             size=size-1;
             d = Front.getDato();
            if(Front==Final)
            {
                Front=null;
                Final=null;
            }
            else
            {
                q=Front;
                Front=Front.getSig();
                q.setSig(null);
            }
         }
        else
        {
            System.out.println("*****Pila Vacia SUBDESBORDAMIENTO DE PILA*****");
        }
        
        return d;
    }

    public Object  Peek()
    {
       Object dato=null; 
       if(IsEmpty()==false)
       {
           dato=Front.getDato();
       }
       return dato;
    }
}
