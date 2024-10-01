import { NotionRenderer } from "react-notion";
import "react-notion/src/styles.css";
import './page.css'

export default async function spotlight() {
    const data = await fetch(
        "https://notion-api.splitbee.io/v1/page/ear-cool-112167d0d4cc8051830ce4ba1b500ebd"
      ).then(res => res.json());
    console.log({data})
  return (
    <main className='main'>
      <div className='title'> ear.cool</div>
      <div>
      <NotionRenderer blockMap={data}/>
    </div>
    </main>
  );
}