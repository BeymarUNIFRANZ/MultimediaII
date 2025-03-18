using UnityEngine;

public class TierraLunaControl : MonoBehaviour
{
    public Transform tierra; // Referencia a la Tierra
    public Transform luna;   // Referencia a la Luna

    private bool rotarTierra = false;
    private bool orbitarLuna = false;
    private bool escalaAumentada = false;

    private Vector3 escalaTierraOriginal;
    private Vector3 escalaLunaOriginal;

    void Start()
    {
        // Guardamos las escalas originales
        escalaTierraOriginal = tierra.localScale;
        escalaLunaOriginal = luna.localScale;
    }

    void Update()
    {
        // Cambiar tamaño con tecla A (toggle entre grande y normal)
        if (Input.GetKeyDown(KeyCode.A))
        {
            if (!escalaAumentada)
            {
                tierra.localScale = escalaTierraOriginal * 1.2f;
                luna.localScale = escalaLunaOriginal * 1.2f;
                escalaAumentada = true;
            }
            else
            {
                tierra.localScale = escalaTierraOriginal;
                luna.localScale = escalaLunaOriginal;
                escalaAumentada = false;
            }
        }

        // Activar rotación de la Tierra sobre su eje con tecla D
        if (Input.GetKeyDown(KeyCode.D))
        {
            rotarTierra = !rotarTierra;
        }

        // Activar órbita de la Luna alrededor de la Tierra con tecla S
        if (Input.GetKeyDown(KeyCode.S))
        {
            orbitarLuna = !orbitarLuna;
        }

        // Rotación de la Tierra sobre su eje Y
        if (rotarTierra)
        {
            tierra.Rotate(Vector3.up * 50 * Time.deltaTime);
        }

        // Órbita de la Luna alrededor de la Tierra
        if (orbitarLuna)
        {
            luna.RotateAround(tierra.position, Vector3.up, 50 * Time.deltaTime);
        }
    }
}
