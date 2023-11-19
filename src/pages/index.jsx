import { Card } from "@/components";

const style = { display: "flex", gap: 10, marginBottom: 10 };

export default function Home() {
  return (
    <div>
      <div style={style}>
        <Card
          title="Messages"
          value={220}
          icon={<img src="/message-outline.svg" />}
          iconPosition="left"
        />
        <Card
          title="Messages"
          value={220}
          icon={<img src="/message-outline.svg" />}
          iconPosition="right"
        />
        <Card title="Messages" value={220} />
      </div>
      <div style={style}>
        <Card
          title="Messages"
          value={220}
          icon={<img src="/message-outline.svg" />}
          iconPosition="left"
          dark
        />
        <Card
          title="Messages"
          value={220}
          icon={<img src="/message-outline.svg" />}
          iconPosition="right"
          dark
        />
        <Card title="Messages" value={220} dark />
      </div>
      <div style={style}>
        <Card
          title="Messages"
          value={220}
          icon={<img src="/message-outline.svg" />}
          iconPosition="left"
          variation={3.2222}
          description="Since last month"
        />
        <Card
          title="Messages"
          value={220}
          icon={<img src="/message-outline.svg" />}
          iconPosition="right"
          variation={3.2222}
          description="Since last month"
        />
        <Card title="Messages" value={220} variation={3.2222} description="Since last month" />
      </div>
      <div style={style}>
        <Card
          title="Messages"
          value={220}
          icon={<img src="/message-outline.svg" />}
          iconPosition="left"
          variation={3.2222}
          description="Since last month"
          dark
        />
        <Card
          title="Messages"
          value={220}
          icon={<img src="/message-outline.svg" />}
          iconPosition="right"
          variation={3.2222}
          description="Since last month"
          dark
        />
        <Card title="Messages" value={220} variation={3.2222} description="Since last month" dark />
      </div>
    </div>
  );
}
