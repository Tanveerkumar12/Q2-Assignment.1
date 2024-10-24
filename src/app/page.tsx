import Link from "next/link";
export default function Home() {
  return (
    <div>
      <h1>
        <b>Name: Tanveer</b>
      </h1>
      <br></br>
      <h1>
        <b>Roll No.: 00105776</b>
      </h1>
      <br></br>
      <h1>
        <b>Assignment-01</b>
      </h1>
      <br></br>
      <h1>
        <b>Country List:</b>
      </h1>
      <br></br>
      <Link href={"/country/pakistan"}>Pakistan</Link>
      <br></br>
      <Link href={"/country/usa"}>USA</Link>
      <br></br>
      <Link href={"/country/japan"}>Japan</Link>
      <br></br>
      <Link href={"/country/india"}>India</Link>
      <br></br>
      <Link href={"/country/bangladesh"}>Bangladesh</Link>
    </div>
  );
}