function daysAgo(dateString) {
    const givenDate = new Date(dateString);
    const today = new Date();
    
    // Calculate the difference in milliseconds
    const diffTime = today - givenDate;
    
    // Convert milliseconds to days
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    return diffDays === 0 ? "Today" : `${diffDays} day(s) ago`;
}


export function formatDate(isoString) {
    const date = new Date(isoString);
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
  
    return `${month}/${day}/${year}`;
  }
  
  
export default daysAgo

