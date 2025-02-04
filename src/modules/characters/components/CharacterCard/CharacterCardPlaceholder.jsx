import styles from './CharacterCard.module.css'

const CharacterCardPlaceholder = () => {
  return (
    <div className={`${styles.card} ${styles.skeleton}`}>
      <div className={`${styles.imageSkeleton}`}></div>
      <div className={styles.card_body}>
        <div>
          <div className={`${styles.textSkeleton} ${styles.titleSkeleton}`}></div>
          <div className={styles.status_content}>
            <div className={`${styles.status_circle} ${styles.skeletonCircle}`}></div>
            <div className={styles.textSkeleton}></div>
          </div>
        </div>
        <div>
          <span className={styles.subTitle}>Last Location</span>
          <div className={styles.textSkeleton}></div>
        </div>
        <div>
          <span className={styles.subTitle}>Type</span>
          <div className={styles.textSkeleton}></div>
        </div>
      </div>
    </div>
  )
}
export default CharacterCardPlaceholder