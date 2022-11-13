import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../../components/ExploreContainer";
import "./Notebook.css";
import { settingsOutline, addOutline } from "ionicons/icons";
import { useHistory } from "react-router";

const Notebook = () => {
  const history = useHistory();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="primary">
            <IonButton>
              <IonIcon slot="icon-only" icon={addOutline}></IonIcon>
            </IonButton>
            <IonButton onClick={() => history.push("/settings")}>
              <IonIcon slot="icon-only" icon={settingsOutline}></IonIcon>
            </IonButton>
          </IonButtons>

          <IonTitle>Notebook</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Notebook;
