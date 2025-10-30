import React from "react";
import styles from "./PrivacyNotice.module.css";



export default function PrivacyNotice(): JSX.Element {
  return (
    <section id="privacy" className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.title}>Aviso de Privacidad</h1>
        <p className={styles.updated}>Última actualización: Octubre 2025</p>

        <p>
          En <strong>WhatsApp Automation</strong> (en adelante, “la Empresa” o
          “nosotros”), con domicilio en Ciudad de México, México, y correo de
          contacto{" "}
          <a href="mailto:contacto@whatsappautomation.mx">contacto@whatsappautomation.mx</a>, somos
          responsables del tratamiento de sus datos personales y hacemos de su
          privacidad una prioridad. El presente Aviso de Privacidad describe
          cómo recabamos, usamos, conservamos y protegemos sus datos personales
          conforme a lo establecido por la Ley Federal de Protección de Datos
          Personales en Posesión de los Particulares (LFPDPPP).
        </p>

        <h2 className={styles.subtitle}>1. Información que recopilamos</h2>
        <p>
          Podemos recabar y procesar, según corresponda, los siguientes datos
          personales:
          <ul>
            <li>Nombre y apellidos.</li>
            <li>Correo electrónico y número de teléfono (incluido WhatsApp).</li>
            <li>Empresa o razón social y puesto (cuando aplique).</li>
            <li>Mensajes e información que nos envíe a través de WhatsApp.</li>
            <li>Datos técnicos: IP, navegador, dispositivo, fecha/hora de acceso y
              otros metadatos.</li>
          </ul>
        </p>

        <h2 className={styles.subtitle}>2. Finalidades del tratamiento</h2>
        <p>
          <strong>Finalidades principales (necesarias):</strong> los datos que
          recabamos serán utilizados para:
          <ul>
            <li>Atender sus consultas y solicitudes a través de WhatsApp u otros medios.</li>
            <li>Prestar y gestionar los servicios de automatización, configuración e implementación.</li>
            <li>Enviar confirmaciones, recordatorios y notificaciones operativas.</li>
            <li>Cumplir obligaciones legales y contractuales relacionadas con el servicio.</li>
          </ul>
        </p>
        <p>
          <strong>Finalidades secundarias (opcionales):</strong>
          con su consentimiento podremos utilizar sus datos para:
          <ul>
            <li>Enviar boletines, promociones o comunicaciones comerciales.</li>
            <li>Elaborar estudios internos, métricas y mejoras del servicio.</li>
          </ul>
        </p>
        <p>
          Si no desea que sus datos se utilicen para finalidades secundarias,
          puede manifestarlo en cualquier momento contactándonos al correo{" "}
          <a href="mailto:contacto@whatsappautomation.mx">contacto@whatsappautomation.mx</a>
          , indicando su nombre y la finalidad a la que se opone.
        </p>

        <h2 className={styles.subtitle}>3. Transferencias y encargados</h2>
        <p>
          Sus datos personales <strong>no serán vendidos</strong>. Podemos
          transferir o compartir datos con terceros que actúen como{" "}
          <em>encargados</em> del tratamiento para la prestación del servicio
          (por ejemplo: proveedores de hosting, plataformas de mensajería,
          herramientas de analítica, proveedores de correo). Estas transferencias
          se realizarán bajo contratos que obliguen a dichos proveedores a
          proteger los datos y a usarlos sólo para la finalidad contratada.
        </p>
        <p>
          Si realizamos transferencias de datos que requieran su consentimiento
          conforme a la ley, le informaremos previamente y podrá aceptar o
          rechazar dicha transferencia.
        </p>

        <h2 className={styles.subtitle}>4. Derechos ARCO y procedimiento</h2>
        <p>
          Usted tiene derecho a acceder, rectificar, cancelar u oponerse (ARCO)
          al tratamiento de sus datos personales, así como a revocar el
          consentimiento que nos haya otorgado.
        </p>
        <p>
          <strong>Cómo ejercer sus derechos ARCO:</strong>
          Envíe un correo a <a href="mailto:contacto@whatsappautomation.mx">contacto@whatsappautomation.mx</a> con la
          siguiente información mínima:
          <ul>
            <li>Nombre completo y medio para recibir la respuesta (correo o teléfono).</li>
            <li>Descripción clara de los datos respecto de los cuales ejercita el derecho.</li>
            <li>Documentos que acrediten su identidad o la personalidad que represente (cuando aplique).</li>
          </ul>
          Recibida su solicitud, la Empresa responderá en un plazo no mayor a
          veinte (20) días hábiles, pudiendo solicitar información adicional
          razonable. Si aplica, la rectificación, cancelación o revocación se
          hará efectiva en un plazo máximo de 15 días hábiles adicionales.
        </p>

        <h2 className={styles.subtitle}>5. Conservación de datos</h2>
        <p>
          Conservaremos sus datos personales durante el tiempo necesario para
          cumplir las finalidades para las que fueron recabados, mientras
          exista una relación con usted o hasta que ejerza sus derechos ARCO y
          solicite la eliminación, salvo obligaciones legales que exijan su
          conservación por un periodo mayor. Tras cumplir los plazos legales, los
          datos serán eliminados o anonimizados.
        </p>

        <h2 className={styles.subtitle}>6. Cookies y tecnologías similares</h2>
        <p>
          Utilizamos cookies y tecnologías similares para mejorar la navegación,
          analizar el uso del sitio y optimizar nuestros servicios. Estas
          tecnologías no recaban datos sensibles sin su consentimiento. Puede
          configurar o bloquear cookies desde su navegador; sin embargo, esto
          podría afectar el funcionamiento del sitio.
        </p>

        <h2 className={styles.subtitle}>7. Seguridad de la información</h2>
        <p>
          Hemos implementado medidas técnicas y administrativas razonables
          para proteger sus datos personales (por ejemplo: cifrado en tránsito,
          controles de acceso y respaldos). No obstante, recuerde que la
          seguridad absoluta no existe y las comunicaciones por Internet pueden
          presentar riesgos inherentes.
        </p>

        <h2 className={styles.subtitle}>8. Cambios al aviso de privacidad</h2>
        <p>
          Podemos actualizar este Aviso de Privacidad. Cualquier cambio será
          publicado en esta sección con la fecha de última actualización. Le
          recomendamos revisar periódicamente este aviso.
        </p>

        <h2 className={styles.subtitle}>9. Autoridad competente</h2>
        <p>
          Si considera que sus derechos han sido vulnerados, tiene el derecho de
          presentar una queja ante el Instituto Nacional de Transparencia,
          Acceso a la Información y Protección de Datos Personales (INAI).
        </p>

        <p className={styles.thanks}>
          Si tiene dudas, desea ejercer sus derechos ARCO o quiere revocar su
          consentimiento, contáctenos en{" "}
          <a href="mailto:contacto@whatsappautomation.mx">contacto@whatsappautomation.mx</a>.
        </p>
      </div>
    </section>
  );
}
