/*

    //block interface
    this.appendDummyInput()
    .appendField("NeoLight count ")
    .appendField(new Blockly.FieldTextInput("0"), "NEOLIGHT_COUNT");

    //read
    get_field_value(block, "NEOLIGHT_COUNT")

    //block interface
    this.appendDummyInput()
    .appendField("setup for voice channel")
    .appendField(new Blockly.FieldDropdown([["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"]]), "COCO_VOICE");

    //read
    get_field_value(block, "COCO_VOICE")

    //block interface
    this.appendValueInput("COCO_MOD")
    .setCheck(null)
    .appendField("modulation to");

    //read
    get_field_value_atomic(block, "COCO_MOD")

    //block interface

    this.appendValueInput("NAME")
        .appendField("NeoSynth set voice")
    this.appendValueInput("COCO_MOD")
        .setCheck(null)
        .appendField("modulation to");
        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    
    //modulation input inline
    this.setInputsInline(true);
        
    //read
    get_field_value_atomic(block, "COCO_MOD")

*/

Blockly.Blocks['NeoLib_fastanalogread'] = {
  /**
   * Block for reading an analogue input.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('http://arduino.cc/en/Reference/AnalogRead');
    this.setColour(Blockly.Blocks.io.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_ANALOGREAD + " (FAST)")
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.analogPins), 'PIN');
    this.setOutput(true, Blockly.Types.NUMBER.output);
    this.setTooltip(Blockly.Msg.ARD_ANALOGREAD_TIP);
  },
  /** @return {!string} The type of return value for the block, an integer. */
  getBlockType: function() {
    return Blockly.Types.NUMBER;
  },
  /**
   * Updates the content of the the pin related fields.
   * @this Blockly.Block
   */
  updateFields: function() {
    Blockly.Arduino.Boards.refreshBlockFieldDropdown(this, 'PIN', 'analogPins');
  }
};