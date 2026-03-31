---
sidebar_position: 2
---

# Sistema de Voz

El software Argus incluye un sistema de comunicación de voz integrado que permite audio bidireccional en tiempo real entre el instructor (en la tablet) y el operador en formación (en la máquina). Esta función utiliza auriculares Bluetooth para una operación manos libres durante las sesiones de entrenamiento.

## Descripción General

El sistema de voz consta de dos componentes principales:

| Componente | Ubicación | Propósito |
|-----------|----------|---------|
| **Auricular del Instructor** | Tablet/Control en Tierra | Permite al instructor hablar y escuchar al operador en formación |
| **Auricular del Operador en Formación** | Máquina/Nodo Hyperion | Permite al operador en formación recibir instrucciones y responder |

## Panel de Control de Voz

Accede al panel de control del Sistema de Voz haciendo clic en el botón **Voice** en la barra de herramientas principal. Este panel proporciona control total sobre el sistema de comunicación de voz.

<div class="image-wrapper-50">
  ![Voice System Control Panel](/img/vts-guide/voice-system-control.png)
  *Panel de control del Sistema de Voz que muestra el estado del sistema y las secciones de auriculares*
</div>

### Sección de Estado del Sistema

La sección contraíble **System Status** muestra:

- **Voice Server Status**: Indica si el servidor de voz está activo (En línea/Fuera de línea)
- **Machine Node Status**: Estado de la conexión al nodo Hyperion de la máquina
- **Mesh WiFi Status**: Conexión a la red de malla ARGUS-VTS
- **Server IP**: La dirección IP del servidor de voz
- **Uptime**: Tiempo que lleva en funcionamiento el servidor de voz

Haz clic en **Run Diagnostic** para probar la conectividad del sistema de voz.

### Auricular del Instructor (Tablet)

Esta sección gestiona el auricular Bluetooth conectado a la tablet del instructor:

1. **Enable Bluetooth**: Abre la Configuración Rápida de Bluetooth de Windows para emparejar un auricular
2. **Connected Device Info**: Muestra el nombre del auricular emparejado y el nivel de batería
3. **Sound Check**: Reproduce un sonido de prueba para verificar la salida de audio

:::tip
Si no hay ningún auricular Bluetooth conectado, el sistema utilizará automáticamente el altavoz y micrófono integrados de la laptop como alternativa.
:::

### Auricular del Operador en Formación (Máquina)

Esta sección gestiona el auricular conectado al nodo Hyperion de la máquina:

1. **Scan**: Busca dispositivos Bluetooth disponibles en el nodo de la máquina
2. **Device List**: Muestra los dispositivos encontrados; haz clic en un dispositivo para seleccionarlo
3. **Bind**: Conecta el dispositivo seleccionado al nodo de la máquina
4. **Battery Indicator**: Muestra el nivel de batería del auricular del operador en formación
5. **Sound Check**: Reproduce un sonido de prueba en el auricular del operador en formación

## Uso

<div class="image-wrapper-50">
  ![Starting Voice System](/img/vts-guide/start-voice.png)
  *Proceso de inicio y conexión del Sistema de Voz*
</div>

**Paso 1: Conectar el Auricular del Instructor**
1. Haz clic en el botón **Voice** en la barra de herramientas
2. En la sección Trainer Headset, haz clic en **Enable Bluetooth**
3. Empareja tu auricular Bluetooth a través de la configuración de Windows
4. El auricular aparecerá en Connected Device Info

**Paso 2: Conectar el Auricular del Operador en Formación**
1. Asegúrate de que el nodo de la máquina esté conectado (verifica el estado en Machine Node Status)
2. Haz clic en **Scan** para buscar dispositivos Bluetooth disponibles
3. Selecciona el auricular del operador en formación de la lista
4. Haz clic en **Bind** para conectar

<div class="image-wrapper-50">
  ![Voice System Connected](/img/vts-guide/voice-system-connected.png)
  *Sistema de Voz con ambos auriculares conectados, mostrando los niveles de batería*
</div>

**Paso 3: Verificar la Conexión**
1. Usa **Sound Check** en ambos extremos para verificar el audio
2. Comprueba que los indicadores de estado muestren verde (conectado)
3. Monitorea los niveles de batería durante la sesión

## Indicadores de Estado

| Color | Significado |
|-------|---------|
| Verde | Conectado y funcionando |
| Amarillo | Inicializando o conectado parcialmente |
| Rojo | Desconectado o con error |

## Solución de Problemas

| Problema | Solución |
|-------|----------|
| No se detecta el auricular del instructor | Abre la configuración de Bluetooth de Windows y asegúrate de que el auricular esté emparejado |
| El escaneo del auricular del operador en formación no muestra dispositivos | Verifica que el nodo de la máquina esté en línea; pon el auricular en modo de emparejamiento |
| Sin audio después de la conexión | Ejecuta Sound Check; verifica el nivel de batería del auricular |
| Conexión intermitente | Verifica la intensidad de la señal de la red de malla; acércate al nodo de red |
