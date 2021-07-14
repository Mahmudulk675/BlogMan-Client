import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Write & Read</span>
        <span className="headerTitleLg">BLOG Man</span>
      </div>
      <img
        className="headerImg"
        src="https://images.unsplash.com/photo-1615859131861-052f0641a60e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2lkZSUyMHdhbGxwYXBlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
        alt=""
      />
    </div>
  );
}
