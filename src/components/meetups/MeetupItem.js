import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";

import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

function MeetupItem(props) {
  const FavoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = FavoritesCtx.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      FavoritesCtx.removeFavorite(props.id);
    } else {
      FavoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        descripion: props.descripion,
        image: props.image,
        address: props.address,
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt="" />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.descripion}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? "Remove from Favorites" : "To Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
