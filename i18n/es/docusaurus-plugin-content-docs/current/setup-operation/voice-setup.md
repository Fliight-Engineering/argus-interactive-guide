---
sidebar_position: 7
---

# Configuración del sistema de voz

Guía de configuración rápida para el sistema de comunicación de voz con auriculares Bluetooth.

## Antes de comenzar

Asegúrese de contar con:
- Dos auriculares Bluetooth (uno para el instructor y uno para el operador en formación)
- Software Argus en ejecución en la tablet del instructor
- Nodo de máquina encendido y conectado a la red mesh

## Pasos de configuración rápida

### 1. Encender los auriculares

**IMPORTANTE**: Encienda ambos auriculares PRIMERO antes de iniciar la aplicación Argus.

<div class="image-wrapper-50">
  ![Botón de encendido del auricular](/img/vts-guide/headset.png)
  *Ubicación del botón de encendido del auricular Bluetooth*
</div>

1. Mantenga presionado el botón de encendido de cada auricular hasta que el LED se ilumine
2. El auricular anunciará "Power On" o reproducirá un tono cuando esté listo
3. Mantenga los auriculares en modo de emparejamiento para la configuración inicial

### 2. Conectar el auricular del instructor

1. Abra el software Argus
2. Haga clic en el botón **Voice** en la barra de herramientas
3. En la sección Trainer Headset, haga clic en **Enable Bluetooth**
4. Empareje su auricular a través de la configuración Bluetooth de Windows
5. Verifique que el auricular aparezca en la información del dispositivo conectado

### 3. Conectar el auricular del operador en formación

1. Verifique que el estado del nodo de máquina muestre "Online"
2. Haga clic en **Scan** para buscar dispositivos Bluetooth disponibles en la máquina
3. Seleccione el auricular del operador en formación de la lista de dispositivos
4. Haga clic en **Bind** para conectar
5. Verifique el indicador del nivel de batería

### 4. Probar la conexión

1. Use el botón **Sound Check** en los lados del instructor y del operador en formación
2. Verifique que los indicadores de estado muestren verde (conectado)
3. Pruebe la comunicación bidireccional
4. Monitoree los niveles de batería durante el uso

## Indicadores de estado

| Indicador | Estado | Acción |
|-----------|--------|--------|
| Verde | Conectado y funcionando | Sistema listo para usar |
| Amarillo | Inicializando o conectado parcialmente | Espere a que se complete la conexión |
| Rojo | Desconectado o con error | Consulte los pasos de solución de problemas |

## Solución de problemas rápida

| Problema | Solución |
|---------|----------|
| Auricular no encontrado | Asegúrese de que el auricular esté encendido y en modo de emparejamiento |
| La conexión se cae | Verifique la intensidad de la señal de la red mesh |
| Sin audio | Ejecute Sound Check; verifique el nivel de batería |
| Nodo de máquina sin conexión | Verifique que la máquina esté encendida y conectada a la red mesh |

:::tip
Para información detallada sobre el sistema de voz y solución de problemas avanzada, consulte la documentación del [Sistema de voz](/docs/argus-software/voice-system).
:::
