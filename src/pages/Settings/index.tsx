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
import "./Settings.css";
import { arrowBackOutline } from "ionicons/icons";
import { useHistory } from "react-router";

const Settings = () => {
  const history = useHistory();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <div style={{ display: "flex" }}>
            <IonButtons slot="primary">
              <IonButton onClick={() => history.goBack()}>
                <IonIcon slot="icon-only" icon={arrowBackOutline}></IonIcon>
              </IonButton>
            </IonButtons>
            <IonTitle>Settings</IonTitle>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div>this is the settings page!</div>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
