import { useEffect, useState } from 'react';
import RootLayouts from '../../layouts/RootLayouts';
import { Collapse, theme } from 'antd';
import listQna from './list_qna.json';

export default function FAQ() {

  const [faqData, setFaqData] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch(listQna);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return console.log(await fetch(listQna).json())
    }
  }
  
  useEffect(() => {
    async function fetchDataAndUpdateFaqData() {
      const data = await fetchData();
      if (data) {
        setFaqData(data);
      }
    }
  
    fetchDataAndUpdateFaqData();
  }, []);

  return (
    <RootLayouts>
      <main className="mb-10 mt-28">
        <div className="bg-[#65435c] my-5 py-10 min-h-8 flex items-center justify-center">
          <div>
            <h1 className="text-4xl font-bold text-center text-white">POS FAQ</h1>
          </div>
        </div>
        <div className="grid gap-5 justify-center align-middle">
          {faqData.length === 0 ? (
            <p>No FAQ data available</p>
          ) : (
            faqData.map((item) => (
              <Collapse
                key={item.idquestion}
                bordered={false}
                className="mr-8 max-w-2xl border-2 pl-3 rounded-lg bg-slate-300"
              >
                <Collapse.Panel
                  header={item.question}
                  key={item.idquestion}
                  style={{
                    background: theme.useToken().token.colorFillAlter,
                    borderRadius: theme.useToken().token.borderRadiusLG,
                    border: 'none',
                  }}
                >
                  <p>{item.answer}</p>
                </Collapse.Panel>
              </Collapse>
            ))
          )}
        </div>
      </main>
    </RootLayouts>
  );
}
