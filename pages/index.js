import Nav from "../components/nav";
import Content from "../components/content";

export default function IndexPage(props) {
  return (
    <div>
      <Nav />
      <Content {...props} />
    </div>
  );
}
