package me.mastrio.thumbtackMultiverse.UI;

public enum UIButton {

  // Enum
  Run("Run"),
  Save("Save"),
  Previous("VVV");

  // Variables
  private String buttonName;

  // Constructor
  UIButton(String button) {

    this.buttonName = button;

  }

  // Methods
  public String get() {

    return buttonName;

  }

}
