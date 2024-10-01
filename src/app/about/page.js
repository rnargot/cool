import { NotionRenderer } from "react-notion";
import "react-notion/src/styles.css";
import './page.css'

export default async function about() {
    const data = await fetch(
        "https://notion-api.splitbee.io/v1/page/manifesto-112167d0d4cc805d8423f6ee341fbe7d"
      ).then(res => res.json());
    const blockMap = {props: {
        blockMap: data
      }
    }
    console.log({data})
  return (
    <main className='main'>
      <div className='title'> about brain worms</div>
      <div>
      <NotionRenderer blockMap={data}/>
    </div>
    </main>
  );
}