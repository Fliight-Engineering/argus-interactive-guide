---
sidebar_position: 4
---

# Monitor de Red Mesh

El software Argus incluye un monitor de red mesh en tiempo real que muestra el estado de conexión entre la tablet del instructor, los nodos relay y la máquina. Esto le permite identificar rápidamente si la red está funcionando correctamente antes y durante una sesión de entrenamiento.

---

## Barra de Estado

El estado de la red mesh siempre es visible en la barra de herramientas superior. Muestra la ruta actual desde la máquina hasta su tablet.

### Verde — Conectado

La red está funcionando. La ruta mostrada indica cómo viaja la señal desde la máquina (M) hasta la tablet.

<div class="image-wrapper-70">
  ![Estado mesh verde - conexión directa](/img/vts-guide/mesh-status-green-direct.png)
  *Conexión directa: Máquina → Puerta de enlace → Tablet*
</div>

Si la ruta pasa por nodos relay, aparecen en la cadena:

<div class="image-wrapper-70">
  ![Estado mesh verde - ruta relay](/img/vts-guide/mesh-status-green-relay.png)
  *Ruta relay: Máquina → R2 → R → Puerta de enlace → Tablet*
</div>

:::tip
Una ruta relay es completamente normal bajo tierra. Mientras el indicador sea verde, la conexión está funcionando correctamente.
:::

### Naranja — Calidad Marginal

La red está conectada pero la calidad del enlace es marginal. La señal es más débil de lo ideal — el sistema seguirá funcionando, pero puede notar una calidad de video reducida o interrupciones breves.

<div class="image-wrapper-70">
  ![Estado mesh naranja - calidad marginal](/img/vts-guide/mesh-status-orange-marginal.png)
  *Calidad de conexión marginal — el enlace funciona pero la señal es débil*
</div>

:::note
Un estado naranja es común cuando la máquina está en el límite del alcance o hay obstrucciones entre los nodos. Considere reposicionar los nodos relay si esto persiste.
:::

### Rojo — Mala Calidad

La conexión de red es muy deficiente. La transmisión de video y la comunicación de voz pueden no funcionar de manera confiable a este nivel. Se requiere acción antes de iniciar o continuar una sesión de entrenamiento.

:::warning
Si la barra de estado está en rojo, no comience una sesión de entrenamiento. Reposicione los nodos relay o acerque la máquina para mejorar la señal antes de continuar.
:::

### Escaneando

El software está buscando la red mesh. Esto aparece brevemente al iniciar o al reconectar.

<div class="image-wrapper-70">
  ![Estado mesh escaneando](/img/vts-guide/mesh-status-scanning.png)
  *Buscando red mesh — espere unos segundos*
</div>

### Sin Mesh

La tablet no puede encontrar la red mesh. Verifique que la tablet esté conectada a la red WiFi ARGUS-VTS.

<div class="image-wrapper-70">
  ![Estado sin mesh](/img/vts-guide/mesh-status-no-mesh.png)
  *No conectado a la red mesh*
</div>

---

## Panel de Red Mesh

Haga clic en el botón de estado mesh en la barra de herramientas para abrir el panel completo de Red Mesh.

### Pestaña de Resumen

La pestaña de Resumen ofrece un resumen simple del estado de la red — esta es la vista principal que usará día a día.

<div class="image-wrapper-70">
  ![Pestaña resumen mesh](/img/vts-guide/mesh-overview.png)
  *Pestaña Resumen mostrando la ruta activa y el estado de los nodos*
</div>

| Elemento | Significado |
|----------|-------------|
| **Estado del Sistema — En Línea y Operativo** | Todos los nodos en la ruta activa están conectados y funcionando |
| **Machine (Máquina)** | El nodo del vehículo — punto verde significa en línea |
| **Trainer (Instructor)** | El nodo puerta de enlace en la entrada del túnel — punto verde significa en línea |
| **Tablet** | Este dispositivo — muestra el rendimiento de datos actual |
| **Good (Bueno)** (etiqueta verde) | La calidad de señal en ese enlace es aceptable |
| **Marginal** (etiqueta naranja) | La calidad de señal es débil — el enlace funciona pero puede ser inestable |
| **Bad (Malo)** (etiqueta roja) | La calidad de señal es muy deficiente — el video y la voz pueden no funcionar |

### Colores de Calidad de Enlace

El enlace entre nodos muestra una etiqueta de color que indica la calidad de señal:

| Color | Etiqueta | Significado |
|-------|----------|-------------|
| Verde | Good (Bueno) | La señal es fuerte y confiable |
| Naranja | Marginal | La señal es débil — puede causar reducción en la calidad de video |
| Rojo | Bad (Malo) | La señal es muy deficiente — se requiere acción |

### Colores de los Nodos

Cada nodo en la lista muestra un punto de color que indica su estado actual:

| Color | Estado |
|-------|--------|
| Verde | En línea y conectado |
| Azul | Este dispositivo (su tablet) |
| Rojo | Sin conexión o no accesible |

### Pestaña Avanzada

La pestaña Avanzada muestra un desglose detallado de cada salto en la ruta activa, incluyendo la intensidad de señal y la versión de firmware de cada nodo.

<div class="image-wrapper-70">
  ![Pestaña avanzada mesh](/img/vts-guide/mesh-advanced.png)
  *Pestaña Avanzada mostrando cada nodo en la ruta activa con detalles de señal*
</div>

### Otros Nodos

Los nodos que forman parte de la red pero que actualmente no están en la ruta activa se listan bajo **Other Nodes (Otros Nodos)**. Generalmente son nodos relay de repuesto que están encendidos pero no son necesarios para la ruta actual.

<div class="image-wrapper-70">
  ![Otros nodos mesh](/img/vts-guide/mesh-other-nodes.png)
  *Otros nodos — punto verde significa en línea, punto rojo significa sin conexión*
</div>

---

## Qué Hacer Si No Hay Conexión

Si la barra de estado muestra **No Mesh** o los nodos aparecen como **Offline**:

1. **Verifique el WiFi de la tablet** — Asegúrese de que la tablet esté conectada a la red ARGUS-VTS-XXX (Configuración → WiFi)
2. **Verifique la alimentación del nodo** — Vaya al nodo sin conexión y confirme que el LED de alimentación esté encendido
3. **Espere 30 segundos** — La red puede tardar hasta 30 segundos en restablecer una ruta después de que un nodo se enciende
4. **Contacte a soporte** — Si el problema persiste, contacte al equipo de soporte de Fliight

:::warning
No comience una sesión de entrenamiento si el Estado del Sistema muestra algo diferente a **Online & Operational (En Línea y Operativo)**.
:::
