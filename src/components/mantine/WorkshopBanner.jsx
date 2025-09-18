import { Text, Title, TextInput, Button, Image, Badge } from "@mantine/core";
// import image from "./image.svg";
import classes from "./EmailBanner.module.css";

export default function WorkshopBanner() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <Title className={classes.title}>Electrical Outage</Title>
        <Text fw={500} fz="lg" mb={5}>
          Sudama Nagar
        </Text>
        <Text fz="sm" c="dimmed">
          Electrical Outage from 6pm in sector C of Sudama Nagar
        </Text>

        <div className={classes.controls}>
          <Badge>Ugrent</Badge>
          <Badge>High Attention </Badge>
        </div>
      </div>
      {/* <Image src={image.src} className={classes.image} /> */}
    </div>
  );
}
