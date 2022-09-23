import { c as create_ssr_component, d as createEventDispatcher, f as add_attribute, e as escape, h as each, v as validate_component, i as null_to_empty } from "../../chunks/index.js";
const Button_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: 'button.svelte-1d1d9ge.svelte-1d1d9ge{display:flex;justify-content:center;align-items:center;border:1px solid #a4ffaf;gap:10px;font-family:"JetBrains Mono", monospace;padding:10px;background-color:#a4ffaf;outline:none;cursor:pointer;transition:all 0.45s ease-in-out}button.svelte-1d1d9ge.svelte-1d1d9ge:hover{background-color:transparent;color:#a4ffaf;border:1px solid #a4ffaf}button.svelte-1d1d9ge:hover svg.svelte-1d1d9ge{stroke:#a4ffaf}',
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<button class="${"svelte-1d1d9ge"}">Generate 
    <svg width="${"12"}" height="${"12"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"svelte-1d1d9ge"}"><path fill="${"#24232C"}" d="${"m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"}"></path></svg></button>`;
});
const CheckBox_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".filterBox.svelte-14jyd7g.svelte-14jyd7g{display:flex;justify-content:start;align-items:center;gap:15px}.filterBox.svelte-14jyd7g input[type=checkbox].svelte-14jyd7g{width:20px;height:20px}.filterBox.svelte-14jyd7g input[type=checkbox].svelte-14jyd7g:checked{color:pink}.filterBox.svelte-14jyd7g label.svelte-14jyd7g{color:white}",
  map: null
};
const CheckBox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { checked = false } = $$props;
  let { id = "" } = $$props;
  let { text = "" } = $$props;
  createEventDispatcher();
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
    $$bindings.checked(checked);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  $$result.css.add(css$1);
  return `<div class="${"filterBox svelte-14jyd7g"}"><input type="${"checkbox"}"${add_attribute("id", id, 0)} ${checked ? "checked" : ""} class="${"svelte-14jyd7g"}">
    <label${add_attribute("for", id, 0)} class="${"svelte-14jyd7g"}">${escape(text)}</label></div>`;
});
const boxes = [
  { id: "upper", text: "Incude uppercase letters", checked: true },
  { id: "lower", text: "Incude lowercase letters", checked: true },
  { id: "number", text: "Incude numbers", checked: true },
  { id: "symbol", text: "Incude symbols", checked: true }
];
const styles = "";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: 'main.svelte-1nir3up.svelte-1nir3up{display:flex;flex-direction:column;height:100%;text-align:center;width:100%;padding:25px;overflow:hidden}main.svelte-1nir3up section.svelte-1nir3up{display:flex;flex-direction:column;justify-content:center;align-items:center;margin:0 auto;height:100%;min-width:300px;max-width:500px;gap:15px}main.svelte-1nir3up section .header.svelte-1nir3up{display:flex;justify-content:space-between;align-items:center;padding:18px;background-color:#242320;width:100%}main.svelte-1nir3up section .header input.svelte-1nir3up{width:91%;padding:15px 13px;background-color:transparent;border:none;outline:none;color:white;font-size:1.4rem;font-family:"JetBrains Mono", monospace}main.svelte-1nir3up section .header svg.svelte-1nir3up{cursor:pointer;transform:scale(1.3)}main.svelte-1nir3up section .settings.svelte-1nir3up{display:flex;flex-direction:column;width:100%;gap:20px;background-color:#242320;padding:18px}main.svelte-1nir3up section .length.svelte-1nir3up{display:flex;justify-content:space-between;width:100%}main.svelte-1nir3up section .length h1.svelte-1nir3up:last-of-type{color:#a4ffaf}main.svelte-1nir3up section .range input[type=range].svelte-1nir3up{width:100%;background-repeat:no-repeat;background-size:0% 100%;background-image:linear-gradient(#a4ffaf, #a4ffaf)}main.svelte-1nir3up section .range input[type=range].svelte-1nir3up::-moz-range-thumb{height:20px;width:20px;border-radius:50%;background:white;cursor:ew-resize;transition:background 0.4s ease-in-out;background-size:5% 100%}main.svelte-1nir3up section .range input[type=range].svelte-1nir3up::-moz-range-thumb:active{background:black}main.svelte-1nir3up section .filter.svelte-1nir3up{display:flex;flex-direction:column;gap:10px}main.svelte-1nir3up section .strength.svelte-1nir3up{display:flex;justify-content:space-around;padding:15px;background-color:#18171f}main.svelte-1nir3up section .strength h3:last-of-type.Weak.svelte-1nir3up{color:#F64a4a}main.svelte-1nir3up section .strength h3:last-of-type.Medium.svelte-1nir3up{color:#fb7c58}main.svelte-1nir3up section .strength h3:last-of-type.Strong.svelte-1nir3up{color:#a4ffaf}main.svelte-1nir3up section .strength .color.svelte-1nir3up{display:flex;gap:6px}main.svelte-1nir3up section .strength .color.Weak span.svelte-1nir3up:first-child{background-color:#F64a4a}main.svelte-1nir3up section .strength .color.Medium span.svelte-1nir3up:first-child{background-color:#fb7c58}main.svelte-1nir3up section .strength .color.Medium span.svelte-1nir3up:nth-of-type(2){background-color:#fb7c58}main.svelte-1nir3up section .strength .color.Strong span.svelte-1nir3up:first-child{background-color:#a4ffaf}main.svelte-1nir3up section .strength .color.Strong span.svelte-1nir3up:nth-of-type(2){background-color:#a4ffaf}main.svelte-1nir3up section .strength .color.Strong span.svelte-1nir3up:nth-of-type(3){background-color:#a4ffaf}main.svelte-1nir3up section .strength .color span.svelte-1nir3up{border:1px solid white;padding:0.15rem}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let backgroundSize;
  let passwordLength = 0;
  let maxLength = 20;
  let minLength = 0;
  let passwordString = "";
  let passwordStrength = "";
  $$result.css.add(css);
  backgroundSize = (passwordLength - maxLength) * 100 / (maxLength - minLength) + 100;
  {
    console.log(backgroundSize);
  }
  return `<main class="${"svelte-1nir3up"}"><section class="${"svelte-1nir3up"}"><h2>Password Generator</h2>
        <div class="${"header svelte-1nir3up"}"><input type="${"text"}"${add_attribute("value", passwordString, 0)} class="${"svelte-1nir3up"}">
            <svg width="${"21"}" height="${"24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"svelte-1nir3up"}"><path d="${"M20.341 3.091 17.909.659A2.25 2.25 0 0 0 16.319 0H8.25A2.25 2.25 0 0 0 6 2.25V4.5H2.25A2.25 2.25 0 0 0 0 6.75v15A2.25 2.25 0 0 0 2.25 24h10.5A2.25 2.25 0 0 0 15 21.75V19.5h3.75A2.25 2.25 0 0 0 21 17.25V4.682a2.25 2.25 0 0 0-.659-1.591ZM12.469 21.75H2.53a.281.281 0 0 1-.281-.281V7.03a.281.281 0 0 1 .281-.281H6v10.5a2.25 2.25 0 0 0 2.25 2.25h4.5v1.969a.282.282 0 0 1-.281.281Zm6-4.5H8.53a.281.281 0 0 1-.281-.281V2.53a.281.281 0 0 1 .281-.281H13.5v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.282.282 0 0 1-.281.281Zm.281-12h-3v-3h.451c.075 0 .147.03.2.082L18.667 4.6a.283.283 0 0 1 .082.199v.451Z"}" fill="${"#A4FFAF"}"></path></svg></div>
        <div class="${"settings svelte-1nir3up"}"><div class="${"length svelte-1nir3up"}"><h1 class="${"svelte-1nir3up"}">Character Length</h1>
                <h1 class="${"svelte-1nir3up"}">${escape(passwordLength)}</h1></div>
            <div class="${"range"}"><input type="${"range"}"${add_attribute("min", minLength, 0)}${add_attribute("max", maxLength, 0)} style="${"background-size: " + escape(backgroundSize, true) + "% 100%;"}" class="${"svelte-1nir3up"}"${add_attribute("value", passwordLength, 0)}></div>
            <div class="${"filter svelte-1nir3up"}">${each(boxes, (box, i) => {
    return `${validate_component(CheckBox, "CheckBox").$$render($$result, Object.assign(box), {}, {})}`;
  })}</div>
            <div class="${"strength svelte-1nir3up"}"><h3>Strength</h3>
                <h3 class="${escape(null_to_empty(passwordStrength), true) + " svelte-1nir3up"}">${escape(passwordStrength)}</h3>
                <div class="${"color " + escape(passwordStrength, true) + " svelte-1nir3up"}"><span class="${"svelte-1nir3up"}"></span>
                    <span class="${"svelte-1nir3up"}"></span>
                    <span class="${"svelte-1nir3up"}"></span></div></div>
            
            ${validate_component(Button, "Button").$$render($$result, {}, {}, {})}</div></section></main>`;
});
export {
  Page as default
};
