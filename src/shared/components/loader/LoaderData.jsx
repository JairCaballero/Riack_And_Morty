import styles from './LoaderData.module.css'

const LoaderData = () => {
  return (
    <div className={styles.container_loader}>
      <p className={styles.text_loader}>Cargando más contenido...</p>
    </div>
  )
}
export default LoaderData