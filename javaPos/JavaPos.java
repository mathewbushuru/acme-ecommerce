// add to ~/.bash_profile export PATH_TO_FX=path/to/javafx-sdk-21.0.2/lib
// source ~/.bash_profile
// echo $PATH_TO_FX

// javac --module-path $PATH_TO_FX --add-modules javafx.controls JavaPos.java
// java --module-path $PATH_TO_FX --add-modules javafx.controls JavaPos

import javafx.application.Application;
import javafx.stage.Stage;
import javafx.scene.Scene;
import javafx.scene.control.Label;
import javafx.scene.layout.StackPane;

public class JavaPos extends Application {
    @Override
    public void start(Stage stage) {
        String javaVersion = System.getProperty("java.version");
        String javafxVersion = System.getProperty("javafx.version");
        Label l = new Label("JavaFX " + javafxVersion + ", running on Java " + javaVersion + ".");
        Scene scene = new Scene(new StackPane(l), 640, 480);
        stage.setScene(scene);
        stage.show();
    }

    public static void main(String[] args) {
        launch();
    }
}