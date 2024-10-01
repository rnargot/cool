import { NotionRenderer } from "react-notion";
import "react-notion/src/styles.css";
import './page.css'

export default async function spotlight() {
    const data = await fetch(
        "https://notion-api.splitbee.io/v1/page/websites-that-i-love-a26571c635c24e43a920bfc6979f8c92"
      ).then(res => res.json());
    const blockMap = {props: {
        blockMap: data
      }
    }
    console.log({data})
  return (
    <main className='main'>
      <div className='title'> websites i love</div>
      <div>
      <NotionRenderer blockMap={data}/>
    </div>
    </main>
  );
}