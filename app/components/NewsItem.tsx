import styles from "../styles/News.module.css";
import Image from "next/image";

interface NewsItemProps {
  title: string;
  content: string;
  imageUrl?: string; // imageUrl opsiyonel
}

export default function NewsItem({ title, content, imageUrl }: NewsItemProps) {
  return (
    <div className={styles.news_item}>
      {imageUrl && (
        <Image
          className={styles.image}
          src={imageUrl}
          width={300}
          height={200}
          alt="Haber Resmi"
        />
      )}
      <div className={styles.content}>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
}
