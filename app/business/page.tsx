import NewsItem from "../components/NewsItem";
import styles from "../styles/Home.module.css";

async function getData() {
  try {
    const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`
    );
    if (!res.ok) {
      throw new Error("Veri çekme başarısız oldu.");
    }
    return res.json();
  } catch (error) {
    console.error(error);
    return {
      error: true,
      message:
        "Haberleri yüklemek mümkün olmadı. Lütfen daha sonra tekrar deneyeiniz.",
    };
  }
}

export default async function Business() {
  const data = await getData();
  const articles = data.articles || []; // articles boşsa boş dizi

  return (
    <div className={styles.container}>
      <div className={styles.main}></div>
      {articles.map((article: any, index: number) => (
        <NewsItem
          key={index}
          title={article.title} // title'ı doğru bir şekilde geç
          content={article.description}
          imageUrl={article.urlToImage} // imageUrl'ü geçir
        />
      ))}
    </div>
  );
}
