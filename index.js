
/**
 *
 *  plugin uses to build `Toggle buttons` 
 * 
 */
 const tooglePlugin = (variants = []) => ({ addUtilities, config, e }) => {
  let colors = config("theme.colors" , []);
  let color_list = [];

  for (const [key, value] of Object.entries(colors)) {    
    if(typeof value === "string"){
      color_list.push({key :key , value:value});
    }
    else if(typeof value === "object"){
      for (const [name, color] of Object.entries(value)) {          
        color_list.push({key:key+'-'+name , value:color})
      }
    }   
  }
  const utilities = color_list.map(color => ({
    ['.toggle-input-'+color.key+':checked ~ .toggle__dot']: {
      'transform': 'translateX(100%)',
      'background-color': color.value,
    },
  }))
  addUtilities(utilities, variants);
};

module.exports = tooglePlugin
