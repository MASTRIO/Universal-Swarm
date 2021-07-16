package me.mastrio.thumbtackMultiverse.UI;

import me.mastrio.thumbtackMultiverse.Main;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class UI extends Component implements ActionListener {

  // Variables

  // UI variables
  static JFrame frame;
  public static JPanel panel;
  static JTextArea outputPane;
  static JButton thumbtackButton;

  // UI sizes
  public static int[] windowFrame = {
    1365, // width
    760 // height
  };
  public static int[] outputBox = {
    10, // x
    70, // y
    475, // width
    485 // height
  };
  public static int[] makeThumbtackButton = {
    417, // x
    493, // y
    63, // width
    22 // height
  };

  // Make UI Method
  public static void draw() {

    // Create base UI
    panel = new JPanel();
    frame = new JFrame(Main.title);
    frame.setSize(windowFrame[0], windowFrame[1]);
    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    frame.add(panel);
    panel.setLayout(null);

    // * UI Objects
    // Command Output box
    outputPane = new JTextArea();
    outputPane.setBounds(outputBox[0], outputBox[1], outputBox[2], outputBox[3]);
    panel.add(outputPane);

    // Previous Command Button
    thumbtackButton = new JButton("Make Thumbtack");
    thumbtackButton.setBounds(makeThumbtackButton[0], makeThumbtackButton[1], makeThumbtackButton[2], makeThumbtackButton[3]);
    thumbtackButton.addActionListener(new UI());
    panel.add(thumbtackButton);

    // Make UI Visible
    frame.setVisible(true);

  }

  @Override
  public void actionPerformed(ActionEvent e) {

    if (e.getActionCommand().equals(UIButton.Run.get())) {

      System.out.println("amongus");

    } else if (e.getActionCommand().equals(UIButton.Save.get())) {

      System.out.println("amongus");

    } else if (e.getActionCommand().equals(UIButton.Previous.get())) {

      System.out.println("amongus");
      System.out.println("amongus");

    }

  }

  // Redraws the UI
  public static void reDraw() {

    UI.frame.setVisible(false);
    UI.draw();

  }

}
