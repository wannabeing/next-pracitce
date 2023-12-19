import styled from "styled-components";

const Wrapper = styled.div``;

export default function Home() {
  return (
    <Wrapper className="grid gap-10 bg-slate-400 py-10 px-5">
      <div className="grid gap-3 bg-white p-10 rounded-2xl shadow-xl">
        <span className="font-bold text-2xl">Select item</span>
        <div className="flex justify-between text-gray-600">
          <span>Grey Chair</span>
          <span>$19</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Tooly Table</span>
          <span>$22</span>
        </div>
        <div className="flex justify-between border-t-2 border-dashed pt-3">
          <span>Total</span>
          <span>$41</span>
        </div>
        <div className="w-1/2 mx-auto text-center font-bold text-white bg-blue-500 rounded-2xl p-5">
          Check Out
        </div>
      </div>
      <div className="bg-white p-10 rounded-2xl shadow-xl"></div>
      <div className="bg-white p-10 rounded-2xl shadow-xl"></div>
      <div className="bg-white p-10 rounded-2xl shadow-xl"></div>
    </Wrapper>
  );
}
