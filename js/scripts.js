/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Alert;
import javafx.scene.control.Alert.AlertType;
import javafx.scene.image.Image;
import javafx.scene.image.ImageView;
import javafx.scene.input.MouseEvent;
import javafx.scene.layout.StackPane;
import javafx.stage.Modality;
import javafx.stage.Stage;

public class ImageZoomExample extends Application {

    @Override
    public void start(Stage primaryStage) {
        // 建立主介面中的 ImageView
        ImageView imageView = new ImageView(new Image("https://cdn.glitch.global/6fa26146-f16e-4190-8d37-182452543057/Shawn%20Mendes%20poster.png?v=1727081961524"));
        
        // 設定圖片初始大小
        imageView.setFitWidth(200);
        imageView.setPreserveRatio(true);

        // 設定圖片點擊事件
        imageView.addEventHandler(MouseEvent.MOUSE_CLICKED, event -> openModal(imageView));

        // 建立 StackPane 作為根佈局
        StackPane root = new StackPane(imageView);

        // 設置主舞台 Scene
        Scene scene = new Scene(root, 400, 300);
        primaryStage.setTitle("Image Zoom Example");
        primaryStage.setScene(scene);
        primaryStage.show();
    }

    // 打開新視窗顯示放大的圖片
    private void openModal(ImageView imageView) {
        // 建立新舞台作為 Modal
        Stage modalStage = new Stage();
        modalStage.initModality(Modality.APPLICATION_MODAL);
        modalStage.setTitle("Zoomed Image");

        // 複製並放大圖片
        ImageView zoomedImageView = new ImageView(imageView.getImage());
        zoomedImageView.setFitWidth(600);  // 設置放大後的寬度
        zoomedImageView.setPreserveRatio(true);

        // 設置 Scene 和顯示 Modal
        StackPane modalRoot = new StackPane(zoomedImageView);
        Scene modalScene = new Scene(modalRoot, 800, 600);
        modalStage.setScene(modalScene);
        modalStage.show();
    }

    public static void main(String[] args) {
        launch(args);
    }
}






/*<input type="file" id="resume" name="resume" />
  
  let downloadBtn = document.querySelector(".downloadBtn");
  <input type="file" id="file" hidden />
<button class="btn_loadFile">Load File</button>

$(".btn_loadFile").click(function () {
  $(":file").trigger("click");
});*/