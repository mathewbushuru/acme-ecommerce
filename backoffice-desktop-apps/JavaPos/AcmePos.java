// Running it from command line instead of IDE(IntelliJ)

// ensure JAVA_HOME is set to point to JDK directory
// add to ~/.bash_profile 'export PATH_TO_FX=path/to/javafx-sdk-21.0.2/lib'
// source ~/.bash_profile
// echo $PATH_TO_FX

// javac --module-path $PATH_TO_FX --add-modules javafx.controls JavaPos.java
// java --module-path $PATH_TO_FX --add-modules javafx.controls JavaPos

import javafx.application.Application;
import javafx.stage.Stage;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.layout.StackPane;
import javafx.scene.control.Label;

public class AcmePos extends Application {
    private Parent createContent(){
        String javaVersion = System.getProperty("java.version");
        String javafxVersion = System.getProperty("javafx.version");
        return new StackPane(new Label("ACME POS. Uses JavaFX " + javafxVersion + ", running on Java " + javaVersion + "."));
    }

    @Override
    public void start(Stage stage){
        Scene scene = new Scene(createContent(), 640, 480);
        stage.setScene(scene);
        stage.show();
    }

    public static void main(String[] args){
        launch();
    }
}
