const { error } = require('console');
const Deposit = require('../models/deposit');

// Read data from table
exports.listDeposits = async (req, res) => {
  try {
    const deposits = await Deposit.findAll();
    res.json(deposits);
  } catch (error) {
    console.error('Error reading deposits:', error.stack);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Insert into table
exports.createDeposit = async (req, res) => {
  const { ActNo, name, Amount, Date } = req.body;
  try {
    await Deposit.create({ ActNo, name, Amount, Date });
    res.json({ message: 'Inserted the row.' });
  } catch (error) {
    console.error('Error inserting into Deposit:', error.stack);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update data in table
exports.updateDeposit = async (req, res) => {
  const { id } = req.params;
  const { ActNo, name, Amount, Date } = req.body;
  try {
    const deposit = await Deposit.findByPk(id);
    if( deposit){
    await Deposit.update({ ActNo, name, Amount, Date }, { where: { id } });
    res.json({ message: 'Updated successfully.' });}
    else{
      res.status(404).json({error:"id not found."});
    }
  } catch (error) {
    console.error('Error updating Deposit:', error.stack);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete from table
exports.deleteDeposit = async (req, res) => {
  const { id } = req.params;
  try {
    const deposit = await Deposit.findByPk(id);
    if(deposit){
    await Deposit.destroy({ where: { id } });
    res.json({ message: 'Deleted successfully.' });}
    else{
      res.status(404).json({error:"id not found."});
    }
  } catch (error) {
    console.error('Error deleting Deposit:', error.stack);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
