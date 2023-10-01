import React, { useState } from 'react';

const ProductSelection: React.FC = () => {
  const [selectedCandidate, setSelectedCandidate] = useState<string>('');
  const [willingPercent, setWillingPercent] = useState<number>(0);

  const handleCandidateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCandidate(event.target.value);
  };

  const handleWillingPercentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWillingPercent(Number(event.target.value));
  };

  return (
    <div>
      <h2>Product Selection</h2>
      <div>
        <label htmlFor="candidate">Select a Candidate:</label>
        <select id="candidate" name="candidate" onChange={handleCandidateChange}>
          <option value="">Select</option>
          <option value="Candidate 1">Candidate 1</option>
          <option value="Candidate 2">Candidate 2</option>
          <option value="Candidate 3">Candidate 3</option>
          <option value="Candidate 4">Candidate 4</option>
        </select>
      </div>

      <div>
        <label htmlFor="willingPercent">Willing Percent:</label>
        <input
          type="number"
          id="willingPercent"
          name="willingPercent"
          value={willingPercent}
          onChange={handleWillingPercentChange}
        />
      </div>
    </div>
  );
};

export default ProductSelection;
