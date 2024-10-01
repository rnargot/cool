import { NotionRenderer } from "react-notion";
import "react-notion/src/styles.css";
import './page.css'

export default async function about() {
    const data = await fetch(
        "https://notion-api.splitbee.io/v1/page/curriculum-bf3b473949b64fbb9312b24d4863aba9"
      ).then(res => res.json());
    const blockMap = {props: {
        blockMap: data
      }
    }
    console.log({data})
  return (
    <main className='main'>
      <div className='title'> curriculum </div>
      <div>
      <NotionRenderer blockMap={data}/>
    </div>
    </main>
  );
}