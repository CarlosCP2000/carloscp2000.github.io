function c(){document.getElementById("button-ecosystem").addEventListener("click",o.bind(null,"showMenuEcosystem","showMenuServicios")),document.getElementById("button-servicios").addEventListener("click",o.bind(null,"showMenuServicios","showMenuEcosystem")),document.getElementById("button-burger").addEventListener("click",i),document.getElementById("button-ecosystem-2").addEventListener("click",d.bind(null,"showMenuEcosystem","showMenuServicios")),document.getElementById("button-servicios-2").addEventListener("click",d.bind(null,"showMenuServicios","showMenuEcosystem"))}function o(n,e){const t=document.getElementById(n),s=e?document.getElementById(e):null;t.classList.toggle("hidden"),s&&s.classList.add("hidden")}function d(n,e){const t=document.getElementById(n),s=e?document.getElementById(e):null;t.classList.toggle("hidden"),s&&s.classList.add("hidden")}function i(){const n=document.getElementById("showMenuBurger"),e=document.getElementById("showMenuEcosystem"),t=document.getElementById("showMenuServicios");n.classList.toggle("hidden"),e.classList.add("hidden"),t.classList.add("hidden")}window.onload=c;
