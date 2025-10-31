"use client"

import type React from "react"

import { useState } from "react"
import styles from "./ContactForm.module.css"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simular envío - aquí conectarías con tu API
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitStatus("success")
    setFormData({ name: "", email: "", company: "", phone: "", message: "" })

    setTimeout(() => setSubmitStatus("idle"), 5000)
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h2 className={styles.title}>Hablemos de tu proyecto</h2>
            <p className={styles.description}>
              Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas para discutir cómo podemos
              ayudarte a alcanzar tus objetivos.
            </p>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder="Juan Pérez"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email corporativo
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder="juan@empresa.com"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="company" className={styles.label}>
                  Empresa
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="Tu Empresa S.A."
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.label}>
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="+34 600 000 000"
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>
                Cuéntanos sobre tu proyecto
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className={styles.textarea}
                placeholder="Describe brevemente qué necesitas y cómo podemos ayudarte..."
              />
            </div>

            <div className={styles.formFooter}>
              <button type="submit" disabled={isSubmitting} className={styles.submitButton}>
                {isSubmitting ? "Enviando..." : "Enviar mensaje"}
              </button>

              {submitStatus === "success" && (
                <p className={styles.successMessage}>✓ Mensaje enviado correctamente. Te contactaremos pronto.</p>
              )}
            </div>
          </form>
        </div>

        <div className={styles.info}>
          <div className={styles.infoCard}>
            <h3 className={styles.infoTitle}>Respuesta rápida</h3>
            <p className={styles.infoText}>Respondemos todos los mensajes en menos de 24 horas laborables.</p>
          </div>

          <div className={styles.infoCard}>
            <h3 className={styles.infoTitle}>Consulta sin compromiso</h3>
            <p className={styles.infoText}>
              La primera consulta es completamente gratuita y sin ningún tipo de compromiso.
            </p>
          </div>

          <div className={styles.infoCard}>
            <h3 className={styles.infoTitle}>Confidencialidad garantizada</h3>
            <p className={styles.infoText}>Toda la información compartida se trata con total confidencialidad.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
