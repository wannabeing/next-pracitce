import styled from "styled-components";

const Wrapper = styled.div``;

export default function Home() {
  return (
    <Wrapper className="grid gap-10 bg-slate-400 py-10 px-5">
      <div className="bg-white p-10 rounded-2xl shadow-xl space-x-5">
        <button className="w-5 h-5 rounded-full bg-yellow-300 transition focus:ring-2 ring-yellow-300 ring-offset-2" />
        <button className="w-5 h-5 rounded-full bg-green-300 transition focus:ring-2 ring-green-300 ring-offset-2" />
        <button className="w-5 h-5 rounded-full bg-blue-800 transition focus:ring-2 ring-blue-800 ring-offset-2" />
      </div>
      <div className="bg-white p-10 rounded-2xl shadow-xl"></div>
    </Wrapper>
  );
}
