---
sidebar_position: 6
---

# Mejores Prácticas

<div class="best-practices-intro">

Esta sección proporciona una guía de mejores prácticas para utilizar el Argus VTS. Si se planifica con anticipación, la configuración del sistema debería tomar alrededor de **5 minutos**.

</div>

## Prácticas Fundamentales

<div class="best-practices-grid">

<div class="best-practice-card">

### Distancia Mínima entre Nodos

<div class="card-content">

La **distancia mínima** entre dos nodos de red estáticos debe ser de **30 metros** para evitar interferencias inalámbricas que afecten la fiabilidad de la transmisión.

<div class="card-highlight">

**Punto Clave**: Una distancia menor a 30 m puede causar interferencias y reducir la calidad del video.

</div>

</div>

</div>

<div class="best-practice-card">

### Posicionamiento de los Nodos

<div class="card-content">

Al montar nodos de red en malla metálica soldada, asegúrese de:

- **No colocarlos en depresiones de paredes** — afecta la línea de visión hacia los nodos vecinos
- **Colocarlos en el punto más exterior de la pared** — ideal para la propagación de la señal
- **Ubicarlos más alto que el nodo de máquina** — requisito mínimo para una cobertura óptima

</div>

</div>

<div class="best-practice-card">

### Monitoreo de la Conexión

<div class="card-content">

1. **Verificar la Aplicación Argus** (esquina inferior derecha) para ver el estado de la red
2. **Esperar 1-2 minutos** — la red necesita tiempo para estabilizarse
3. **Si el rendimiento es deficiente** — reposicionar los nodos de red y repetir

<div class="card-highlight">

**Consejo**: Dé tiempo a la red mesh para establecer las conexiones antes de realizar ajustes.

</div>

</div>

</div>

<div class="best-practice-card">

### Distancia del Nodo del Instructor

<div class="card-content">

Despliegue el nodo del instructor lo más lejos posible de la tableta para obtener la mejor cobertura operativa, manteniendo la línea de visión hacia la tableta.

:::note Monitoreo del Instructor
El instructor puede monitorear desde una distancia más segura o estratégica manteniendo el control total del sistema.
:::

</div>

</div>

<div class="best-practice-card">

### Encendido del Nodo/RCS

<div class="card-content">

Si el nodo de red o el RCS no parece encenderse:

- Use una **pulsación firme y suelta única**
- Dé tiempo al equipo para arrancar (10-15 segundos)
- Observe los cambios en el indicador LED

<div class="card-highlight">

**Problema Frecuente**: Varias pulsaciones rápidas pueden impedir la secuencia de arranque correcta.

</div>

</div>

</div>

</div>

## Monitoreo del Estado de la Red

<div class="best-practice-card best-practice-card-full">

### Panel de Monitoreo del Estado de la Red

<div class="card-content">

El panel de monitoreo del estado de la red (ubicado en la **esquina inferior derecha** de la Aplicación Argus) proporciona una forma simple e intuitiva de evaluar el rendimiento de la red en tiempo real.

<div class="image-wrapper-70">
  ![Connection Monitoring - Placeholder](/img/vts-guide/network-health.png)
  *Panel de Monitoreo del Estado de la Red en la Aplicación Argus (esquina inferior derecha)*
</div>

Para ambas bandas de red (**wlan0**: 2,4 GHz y **wlan1**: 5 GHz), los valores de costo se muestran con indicadores de color.

### Comprensión de los Indicadores

| Indicador | Estado | Significado |
|-----------|--------|-------------|
| **Verde** | Óptimo | Excelente calidad de conexión, transmisión de video fiable |
| **Naranja** | Funcional | La conexión funciona pero no es óptima |
| **Rojo** | Deficiente | Problemas significativos de conexión |

:::tip Verificación Rápida
Si ve indicadores rojos, la solución más común es reposicionar los nodos de red para mejorar la línea de visión. Incluso pequeños ajustes pueden marcar una diferencia significativa.
:::

</div>

</div>

## Configuración Avanzada

<div class="best-practice-card best-practice-card-full">

### Extender la Cobertura Alrededor de Esquinas

<div class="card-content">

Para extender la cobertura del VTS alrededor de esquinas:

<div class="image-wrapper-70">
  ![Repeater AP Corner Configuration](/img/vts-guide/antennas-ouod.png)
  *Una antena hacia arriba y la otra hacia abajo, para proporcionar señal alrededor de una esquina*
</div>

1. **Posicionar el nodo del instructor o nodo repetidor en la esquina**
2. **Orientar las dos antenas estratégicamente**:
   - **Antena 1**: Hacia la trayectoria de desplazamiento del vehículo (proporciona cobertura)
   - **Antena 2**: Hacia el nodo de red estático anterior con línea de visión despejada (mantiene la conexión de red)

Esta configuración permite al sistema "doblar" alrededor de las esquinas y extender la cobertura hacia áreas sin línea de visión directa.

</div>

</div>

<div class="best-practice-card best-practice-card-full">

### Operación de la Tableta Argus

<div class="card-content">

<div class="image-wrapper-70">
  ![Argus Full Screen View](/img/vts-guide/argus-software.png)
  *Vista de pantalla completa del software Argus mostrando múltiples feeds de cámara e interfaz de control*
</div>

Una vez que la aplicación está abierta y el sistema está conectado, los cuatro feeds de cámara comenzarán a transmitirse automáticamente.

**Para ver un feed de cámara en pantalla completa**: Doble toque en cualquier video de la barra lateral

La interfaz proporciona:

1. **Iniciar grabación** de todos los feeds de cámara conectados en la carpeta especificada (Configuración/Grabación/Directorio)
2. **Botón de ajuste rápido de vista de cámara**
3. **Abrir la carpeta del directorio de grabación** en el Explorador
4. **Configuración de la Aplicación**
5. **Botones para expandir y cerrar la aplicación**
6. **Panel de Monitoreo del Estado de la Red**

</div>

</div>

