(()=>{"use strict";window.onload=function(){const e=document.getElementById("content"),t=document.createElement("h2");t.textContent="The Loaf Kings";const n=document.createElement("div");n.className="product";const c=document.createElement("div");c.className="title-desc";const a=new Image;a.src="../images/main.jpg",a.className="recipe-image";const o=document.createElement("h3");o.textContent="Yeastful Adventures";const s=document.createElement("p");s.textContent="Here at Loaf Kings we provide you with beautifully crated artisan bread that tastes as good as it looks! Browse our available loaves on the menu page!";const l=document.createElement("div");l.className="tabs";const m=document.createElement("div");m.className="left-tabs";for(let e=0;e<3;e++){const t=["Home","Menu","Contact"],n=document.createElement("button");n.className="nav-item",n.textContent=t[e],m.append(n)}const d=document.createElement("button");d.className="nav-item",d.textContent="Basket",l.append(m,d),c.append(o,s),n.append(c,a),e.append(t,l,n),document.querySelectorAll("button")[0].classList.add("active")}();const e=document.querySelectorAll("button");e.forEach(((e,t)=>{e.addEventListener("click",(()=>{!function(){const e=document.getElementById("content"),t=e.querySelectorAll("img"),n=e.querySelectorAll("h3"),c=e.querySelectorAll("h4");[...t,...n,...e.querySelectorAll("p"),...e.querySelectorAll("ul"),...c,...e.querySelectorAll("form"),...e.querySelectorAll(".product"),...e.querySelectorAll(".contact-us")].forEach((e=>e.remove()))}(),0==t&&function(){const e=document.getElementById("content"),t=document.createElement("div");t.className="product";const n=document.createElement("div");n.className="title-desc";const c=new Image;c.src="../images/main.jpg",c.className="recipe-image";const a=document.createElement("h3");a.textContent="Yeastful Adventures";const o=document.createElement("p");o.textContent="Here at Loaf Kings we provide you with beautifully crated artisan bread that tastes as good as it looks! Browse our available loaves on the menu page!",n.append(a,o),t.append(n,c),e.append(t)}(),1==t&&function(){const e=document.getElementById("content"),t=document.createElement("div");t.className="product";const n=document.createElement("h3");n.textContent="Special Sourdough";const c=document.createElement("div");c.className="title-desc";const a=new Image;a.src="../images/sourdough.jpg",a.className="recipe-image";const o=document.createElement("p");o.textContent="An wonderfully crafted artisan sourdough. Perfect as part of a ploughmans lunch.";const s=document.createElement("h3");s.textContent="£2";const l=document.createElement("button");l.textContent="Add to cart",l.className="add-cart",c.append(n,o,s,l),t.append(c,a);const m=document.createElement("div");m.className="product";const d=document.createElement("h3");d.textContent="Signature Farmhouse Loaf";const r=document.createElement("div");r.className="title-desc";const i=new Image;i.src="../images/loaf.jpg",i.className="recipe-image";const u=document.createElement("p");u.textContent="A full and crispy farmhouse loaf baked to perfection by our team of talented bakery chefs. Perfect for toast as well.";const p=document.createElement("h3");p.textContent="£2.30";const v=document.createElement("button");v.textContent="Add to cart",v.className="add-cart",r.append(d,u,p,v),m.append(r,i),e.append(t,m)}(),2==t&&function(){const e=document.getElementById("content"),t=document.createElement("div");t.className="contact-us";const n=document.createElement("h3");n.textContent="Contact Us";const c=document.createElement("form"),a=document.createElement("input"),o=document.createElement("input"),s=document.createElement("textarea");a.type="text",a.id="name",a.name="name",a.placeholder="Full name",o.type="email",o.id="email",o.name="email",o.placeholder="Email address",s.id="msg",s.name="msg",s.placeholder="Enter your message here",s.rows="4",s.cols="50";const l=document.createElement("button");l.className="submit",l.textContent="Submit",c.append(a,o,s,l),t.append(n,c),e.append(t)}(),3==t&&function(){const e=document.getElementById("content"),t=document.createElement("h3");t.textContent="Your Basket";const n=document.createElement("div");n.className="product",n.append(t),e.append(n)}()}))})),e[0].addEventListener("click",(()=>{e[0].classList.add("active"),e[1].classList.remove("active"),e[2].classList.remove("active"),e[3].classList.remove("active")})),e[1].addEventListener("click",(()=>{e[1].classList.add("active"),e[0].classList.remove("active"),e[2].classList.remove("active"),e[3].classList.remove("active")})),e[2].addEventListener("click",(()=>{e[2].classList.add("active"),e[1].classList.remove("active"),e[0].classList.remove("active"),e[3].classList.remove("active")})),e[3].addEventListener("click",(()=>{e[3].classList.add("active"),e[0].classList.remove("active"),e[1].classList.remove("active"),e[2].classList.remove("active")}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFRLEdBQUdILFVBQVVVLE9BQU8sVUFDNUJQLEVBQVEsR0FBR0gsVUFBVVUsT0FBTyxTQUFTLElBR3pDUCxFQUFRLEdBQUdFLGlCQUFpQixTQUFTLEtBQ2pDRixFQUFRLEdBQUdILFVBQVVDLElBQUksVUFDekJFLEVBQVEsR0FBR0gsVUFBVVUsT0FBTyxVQUM1QlAsRUFBUSxHQUFHSCxVQUFVVSxPQUFPLFVBQzVCUCxFQUFRLEdBQUdILFVBQVVVLE9BQU8sU0FBUyxJQUd6Q1AsRUFBUSxHQUFHRSxpQkFBaUIsU0FBUyxLQUNqQ0YsRUFBUSxHQUFHSCxVQUFVQyxJQUFJLFVBQ3pCRSxFQUFRLEdBQUdILFVBQVVVLE9BQU8sVUFDNUJQLEVBQVEsR0FBR0gsVUFBVVUsT0FBTyxVQUM1QlAsRUFBUSxHQUFHSCxVQUFVVSxPQUFPLFNBQVMsSUFJekNQLEVBQVEsR0FBR0UsaUJBQWlCLFNBQVMsS0FDakNGLEVBQVEsR0FBR0gsVUFBVUMsSUFBSSxVQUN6QkUsRUFBUSxHQUFHSCxVQUFVVSxPQUFPLFVBQzVCUCxFQUFRLEdBQUdILFVBQVVVLE9BQU8sVUFDNUJQLEVBQVEsR0FBR0gsVUFBVVUsT0FBTyxTQUFTLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VMb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9iYXNrZXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbml0aWFsUGFnZUxvYWR9IGZyb20gJy4vcGFnZUxvYWQnO1xuaW1wb3J0IHttZW51UGFnZX0gZnJvbSAnLi9tZW51JztcbmltcG9ydCB7aG9tZVBhZ2V9IGZyb20gJy4vaG9tZSc7XG5pbXBvcnQge2NvbnRhY3RQYWdlfSBmcm9tICcuL2NvbnRhY3QnO1xuaW1wb3J0IHtiYXNrZXRQYWdlfSBmcm9tICcuL2Jhc2tldCc7XG5cbndpbmRvdy5vbmxvYWQgPSBpbml0aWFsUGFnZUxvYWQoKTtcblxuY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpO1xuXG5idXR0b25zLmZvckVhY2goKGJ1dHRvbiwgaSkgPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY2xlYXJQYWdlKCk7XG4gICAgICAgIGlmIChpID09IDApIHtcbiAgICAgICAgICAgIGhvbWVQYWdlKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGkgPT0gMSkge1xuICAgICAgICAgICAgbWVudVBhZ2UoKTtcbiAgICAgICAgfSBcbiAgICAgICAgaWYgKGkgPT0gMikge1xuICAgICAgICAgICAgY29udGFjdFBhZ2UoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaSA9PSAzKSB7XG4gICAgICAgICAgICBiYXNrZXRQYWdlKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuXG5idXR0b25zWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGJ1dHRvbnNbMF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgYnV0dG9uc1sxXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICBidXR0b25zWzJdLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIGJ1dHRvbnNbM10uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG59KTtcblxuYnV0dG9uc1sxXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBidXR0b25zWzFdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIGJ1dHRvbnNbMF0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgYnV0dG9uc1syXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICBidXR0b25zWzNdLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xufSk7XG5cbmJ1dHRvbnNbMl0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgYnV0dG9uc1syXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICBidXR0b25zWzFdLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIGJ1dHRvbnNbMF0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgYnV0dG9uc1szXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcblxufSk7XG5cbmJ1dHRvbnNbM10uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgYnV0dG9uc1szXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICBidXR0b25zWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIGJ1dHRvbnNbMV0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgYnV0dG9uc1syXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbn0pO1xuXG5mdW5jdGlvbiBjbGVhclBhZ2UoKSB7XG5cbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAgIGNvbnN0IGltZ3MgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpO1xuICAgIGNvbnN0IGhlYWRpbmdzID0gY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKCdoMycpO1xuICAgIGNvbnN0IHN1YkhlYWRpbmdzID0gY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKCdoNCcpO1xuICAgIGNvbnN0IHBhcmFzID0gY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKCdwJyk7XG4gICAgY29uc3QgbGlzdHMgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3VsJyk7XG4gICAgY29uc3QgZm9ybXMgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Zvcm0nKTtcbiAgICBjb25zdCBwcm9kdWN0cyA9IGNvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2R1Y3QnKTtcbiAgICBjb25zdCBjb250YWN0Rm9ybSA9IGNvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbnRhY3QtdXMnKTtcblxuICAgIGNvbnN0IGVsZW1lbnRzVG9SZW1vdmUgPSBbLi4uaW1ncywgLi4uaGVhZGluZ3MsIC4uLnBhcmFzLCAuLi5saXN0cyxcbiAgICAuLi5zdWJIZWFkaW5ncywgLi4uZm9ybXMsIC4uLnByb2R1Y3RzLCAuLi5jb250YWN0Rm9ybV07XG5cbiAgICBlbGVtZW50c1RvUmVtb3ZlLmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LnJlbW92ZSgpKTtcbn0iLCJleHBvcnQgZnVuY3Rpb24gaW5pdGlhbFBhZ2VMb2FkKCkge1xuXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ1RoZSBMb2FmIEtpbmdzJztcblxuICAgIGNvbnN0IGhvbWVCYW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob21lQmFubmVyLmNsYXNzTmFtZSA9ICdwcm9kdWN0JztcblxuICAgIGNvbnN0IHN1YkFuZEluZm9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzdWJBbmRJbmZvQ29udGFpbmVyLmNsYXNzTmFtZSA9ICd0aXRsZS1kZXNjJztcblxuICAgIGNvbnN0IG1haW4gPSBuZXcgSW1hZ2UoKTtcblxuICAgIG1haW4uc3JjID0gJy4uL2ltYWdlcy9tYWluLmpwZyc7XG4gICAgbWFpbi5jbGFzc05hbWUgPSAncmVjaXBlLWltYWdlJztcblxuICAgIGNvbnN0IHN1YkhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHN1YkhlYWRpbmcudGV4dENvbnRlbnQgPSAnWWVhc3RmdWwgQWR2ZW50dXJlcyc7XG5cbiAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGluZm8udGV4dENvbnRlbnQgPSBcIkhlcmUgYXQgTG9hZiBLaW5ncyB3ZSBwcm92aWRlIHlvdSB3aXRoIGJlYXV0aWZ1bGx5IGNyYXRlZCBhcnRpc2FuIGJyZWFkIHRoYXQgdGFzdGVzIGFzIGdvb2QgYXMgaXQgbG9va3MhIEJyb3dzZSBvdXIgYXZhaWxhYmxlIGxvYXZlcyBvbiB0aGUgbWVudSBwYWdlIVwiO1xuXG4gICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmF2QmFyLmNsYXNzTmFtZSA9ICd0YWJzJztcblxuICAgIGNvbnN0IGxlZnRUYWJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGVmdFRhYnMuY2xhc3NOYW1lID0gJ2xlZnQtdGFicyc7XG5cbiAgICBmb3IgKGxldCBpPTA7IGk8MzsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG5hdlRpdGxlcyA9IFsnSG9tZScsICdNZW51JywgJ0NvbnRhY3QnXTtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGJ1dHRvbi5jbGFzc05hbWUgPSAnbmF2LWl0ZW0nO1xuICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSBuYXZUaXRsZXNbaV07XG4gICAgICAgIGxlZnRUYWJzLmFwcGVuZChidXR0b24pO1xuICAgIH1cblxuICAgIGNvbnN0IGJhc2tldFRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJhc2tldFRhYi5jbGFzc05hbWUgPSAnbmF2LWl0ZW0nO1xuICAgIGJhc2tldFRhYi50ZXh0Q29udGVudCA9ICdCYXNrZXQnO1xuICAgIG5hdkJhci5hcHBlbmQobGVmdFRhYnMsYmFza2V0VGFiKTtcbiAgICBzdWJBbmRJbmZvQ29udGFpbmVyLmFwcGVuZChzdWJIZWFkaW5nLCBpbmZvKTtcblxuICAgIGhvbWVCYW5uZXIuYXBwZW5kKHN1YkFuZEluZm9Db250YWluZXIsbWFpbik7XG4gICAgY29udGVudC5hcHBlbmQodGl0bGUsIG5hdkJhciwgaG9tZUJhbm5lcik7XG5cbiAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uc1swXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbn0iLCJleHBvcnQgZnVuY3Rpb24gaG9tZVBhZ2UoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgICBjb25zdCBob21lQmFubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG9tZUJhbm5lci5jbGFzc05hbWUgPSAncHJvZHVjdCc7XG5cbiAgICBjb25zdCBzdWJBbmRJbmZvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3ViQW5kSW5mb0NvbnRhaW5lci5jbGFzc05hbWUgPSAndGl0bGUtZGVzYyc7XG5cbiAgICBjb25zdCBtYWluID0gbmV3IEltYWdlKCk7XG5cbiAgICBtYWluLnNyYyA9ICcuLi9pbWFnZXMvbWFpbi5qcGcnO1xuICAgIG1haW4uY2xhc3NOYW1lID0gJ3JlY2lwZS1pbWFnZSc7XG5cbiAgICBjb25zdCBzdWJIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBzdWJIZWFkaW5nLnRleHRDb250ZW50ID0gJ1llYXN0ZnVsIEFkdmVudHVyZXMnO1xuXG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBpbmZvLnRleHRDb250ZW50ID0gXCJIZXJlIGF0IExvYWYgS2luZ3Mgd2UgcHJvdmlkZSB5b3Ugd2l0aCBiZWF1dGlmdWxseSBjcmF0ZWQgYXJ0aXNhbiBicmVhZCB0aGF0IHRhc3RlcyBhcyBnb29kIGFzIGl0IGxvb2tzISBCcm93c2Ugb3VyIGF2YWlsYWJsZSBsb2F2ZXMgb24gdGhlIG1lbnUgcGFnZSFcIjtcblxuXG4gICAgc3ViQW5kSW5mb0NvbnRhaW5lci5hcHBlbmQoc3ViSGVhZGluZywgaW5mbyk7XG5cbiAgICBob21lQmFubmVyLmFwcGVuZChzdWJBbmRJbmZvQ29udGFpbmVyLCBtYWluKTtcbiAgICBjb250ZW50LmFwcGVuZChob21lQmFubmVyKTtcbn0iLCJleHBvcnQgZnVuY3Rpb24gbWVudVBhZ2UoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cblxuICAgIGNvbnN0IGZpcnN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZpcnN0SXRlbS5jbGFzc05hbWUgPSAncHJvZHVjdCc7XG4gICAgXG5cbiAgICBjb25zdCB0aXRsZU9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgdGl0bGVPbmUudGV4dENvbnRlbnQgPSAnU3BlY2lhbCBTb3VyZG91Z2gnO1xuXG4gICAgY29uc3QgbWVudUNhcnRPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51Q2FydE9uZS5jbGFzc05hbWUgPSAndGl0bGUtZGVzYyc7XG5cbiAgICBjb25zdCBzb3VyZG91Z2hJbWFnZSA9IG5ldyBJbWFnZSgpO1xuXG4gICAgc291cmRvdWdoSW1hZ2Uuc3JjID0gJy4uL2ltYWdlcy9zb3VyZG91Z2guanBnJztcbiAgICBzb3VyZG91Z2hJbWFnZS5jbGFzc05hbWUgPSAncmVjaXBlLWltYWdlJztcblxuICAgIGNvbnN0IHNvdXJkb3VnaERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgc291cmRvdWdoRGVzYy50ZXh0Q29udGVudCA9ICdBbiB3b25kZXJmdWxseSBjcmFmdGVkIGFydGlzYW4gc291cmRvdWdoLiBQZXJmZWN0IGFzIHBhcnQgb2YgYSBwbG91Z2htYW5zIGx1bmNoLic7XG5cbiAgICBjb25zdCBpdGVtMVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBpdGVtMVByaWNlLnRleHRDb250ZW50ID0gJ8KjMic7XG5cbiAgICBjb25zdCBhZGRJdGVtMVRvQ2FydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZEl0ZW0xVG9DYXJ0LnRleHRDb250ZW50ID0gJ0FkZCB0byBjYXJ0JztcbiAgICBhZGRJdGVtMVRvQ2FydC5jbGFzc05hbWUgPSAnYWRkLWNhcnQnO1xuXG4gICAgbWVudUNhcnRPbmUuYXBwZW5kKHRpdGxlT25lLHNvdXJkb3VnaERlc2MsaXRlbTFQcmljZSxhZGRJdGVtMVRvQ2FydCk7XG4gICAgZmlyc3RJdGVtLmFwcGVuZChtZW51Q2FydE9uZSxzb3VyZG91Z2hJbWFnZSk7XG5cbiAgICBjb25zdCBzZWNvbmRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2Vjb25kSXRlbS5jbGFzc05hbWUgPSAncHJvZHVjdCc7XG5cbiAgICBjb25zdCB0aXRsZVR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgdGl0bGVUd28udGV4dENvbnRlbnQgPSAnU2lnbmF0dXJlIEZhcm1ob3VzZSBMb2FmJztcblxuICAgIGNvbnN0IG1lbnVDYXJ0VHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUNhcnRUd28uY2xhc3NOYW1lID0gJ3RpdGxlLWRlc2MnO1xuXG4gICAgY29uc3QgZmFybWhvdXNlSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcblxuICAgIGZhcm1ob3VzZUltYWdlLnNyYyA9ICcuLi9pbWFnZXMvbG9hZi5qcGcnO1xuICAgIGZhcm1ob3VzZUltYWdlLmNsYXNzTmFtZSA9ICdyZWNpcGUtaW1hZ2UnO1xuXG4gICAgY29uc3QgZmFybWhvdXNlRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBmYXJtaG91c2VEZXNjLnRleHRDb250ZW50ID0gJ0EgZnVsbCBhbmQgY3Jpc3B5IGZhcm1ob3VzZSBsb2FmIGJha2VkIHRvIHBlcmZlY3Rpb24gYnkgb3VyIHRlYW0gb2YgdGFsZW50ZWQgYmFrZXJ5IGNoZWZzLiBQZXJmZWN0IGZvciB0b2FzdCBhcyB3ZWxsLic7XG5cbiAgICBjb25zdCBpdGVtMlByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBpdGVtMlByaWNlLnRleHRDb250ZW50ID0gJ8KjMi4zMCc7XG5cbiAgICBjb25zdCBhZGRJdGVtMlRvQ2FydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZEl0ZW0yVG9DYXJ0LnRleHRDb250ZW50ID0gJ0FkZCB0byBjYXJ0JztcbiAgICBhZGRJdGVtMlRvQ2FydC5jbGFzc05hbWUgPSAnYWRkLWNhcnQnO1xuXG4gICAgbWVudUNhcnRUd28uYXBwZW5kKHRpdGxlVHdvLGZhcm1ob3VzZURlc2MsaXRlbTJQcmljZSxhZGRJdGVtMlRvQ2FydCk7XG4gICAgc2Vjb25kSXRlbS5hcHBlbmQobWVudUNhcnRUd28sZmFybWhvdXNlSW1hZ2UpO1xuXG4gICAgXG4gICAgY29udGVudC5hcHBlbmQoZmlyc3RJdGVtLHNlY29uZEl0ZW0pO1xufSIsImV4cG9ydCBmdW5jdGlvbiBjb250YWN0UGFnZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAgIGNvbnN0IGNvbnRhY3RCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0Qm94LmNsYXNzTmFtZSA9ICdjb250YWN0LXVzJztcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdDb250YWN0IFVzJztcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCBlbWFpbElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCBtZXNzYWdlQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcblxuICAgIG5hbWVJbnB1dC50eXBlID0gJ3RleHQnOyBuYW1lSW5wdXQuaWQgPSAnbmFtZSc7XG4gICAgbmFtZUlucHV0Lm5hbWUgPSAnbmFtZSc7IG5hbWVJbnB1dC5wbGFjZWhvbGRlciA9ICdGdWxsIG5hbWUnO1xuXG4gICAgZW1haWxJbnB1dC50eXBlID0gJ2VtYWlsJzsgZW1haWxJbnB1dC5pZCA9ICdlbWFpbCc7XG4gICAgZW1haWxJbnB1dC5uYW1lID0gJ2VtYWlsJzsgZW1haWxJbnB1dC5wbGFjZWhvbGRlciA9ICdFbWFpbCBhZGRyZXNzJztcblxuICAgIG1lc3NhZ2VCb3guaWQgPSAnbXNnJzsgbWVzc2FnZUJveC5uYW1lID0gJ21zZyc7XG4gICAgbWVzc2FnZUJveC5wbGFjZWhvbGRlciA9ICdFbnRlciB5b3VyIG1lc3NhZ2UgaGVyZSc7XG4gICAgbWVzc2FnZUJveC5yb3dzID0gJzQnOyBtZXNzYWdlQm94LmNvbHMgPSAnNTAnO1xuXG4gICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc3VibWl0LmNsYXNzTmFtZSA9ICdzdWJtaXQnO1xuICAgIHN1Ym1pdC50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xuXG4gICAgZm9ybS5hcHBlbmQobmFtZUlucHV0LGVtYWlsSW5wdXQsbWVzc2FnZUJveCxzdWJtaXQpO1xuXG4gICAgY29udGFjdEJveC5hcHBlbmQodGl0bGUsIGZvcm0pXG4gICAgY29udGVudC5hcHBlbmQoY29udGFjdEJveCk7XG5cbn0iLCJleHBvcnQgZnVuY3Rpb24gYmFza2V0UGFnZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdZb3VyIEJhc2tldCc7XG5cbiAgICBjb25zdCBib3hDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYm94Q29udGVudC5jbGFzc05hbWUgPSAncHJvZHVjdCc7XG5cbiAgICBib3hDb250ZW50LmFwcGVuZCh0aXRsZSk7XG4gICAgY29udGVudC5hcHBlbmQoYm94Q29udGVudCk7XG59Il0sIm5hbWVzIjpbIndpbmRvdyIsIm9ubG9hZCIsImNvbnRlbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidGl0bGUiLCJjcmVhdGVFbGVtZW50IiwidGV4dENvbnRlbnQiLCJob21lQmFubmVyIiwiY2xhc3NOYW1lIiwic3ViQW5kSW5mb0NvbnRhaW5lciIsIm1haW4iLCJJbWFnZSIsInNyYyIsInN1YkhlYWRpbmciLCJpbmZvIiwibmF2QmFyIiwibGVmdFRhYnMiLCJpIiwibmF2VGl0bGVzIiwiYnV0dG9uIiwiYXBwZW5kIiwiYmFza2V0VGFiIiwicXVlcnlTZWxlY3RvckFsbCIsImNsYXNzTGlzdCIsImFkZCIsImluaXRpYWxQYWdlTG9hZCIsImJ1dHRvbnMiLCJmb3JFYWNoIiwiYWRkRXZlbnRMaXN0ZW5lciIsImltZ3MiLCJoZWFkaW5ncyIsInN1YkhlYWRpbmdzIiwiZWxlbWVudCIsInJlbW92ZSIsImNsZWFyUGFnZSIsImhvbWVQYWdlIiwiZmlyc3RJdGVtIiwidGl0bGVPbmUiLCJtZW51Q2FydE9uZSIsInNvdXJkb3VnaEltYWdlIiwic291cmRvdWdoRGVzYyIsIml0ZW0xUHJpY2UiLCJhZGRJdGVtMVRvQ2FydCIsInNlY29uZEl0ZW0iLCJ0aXRsZVR3byIsIm1lbnVDYXJ0VHdvIiwiZmFybWhvdXNlSW1hZ2UiLCJmYXJtaG91c2VEZXNjIiwiaXRlbTJQcmljZSIsImFkZEl0ZW0yVG9DYXJ0IiwibWVudVBhZ2UiLCJjb250YWN0Qm94IiwiZm9ybSIsIm5hbWVJbnB1dCIsImVtYWlsSW5wdXQiLCJtZXNzYWdlQm94IiwidHlwZSIsImlkIiwibmFtZSIsInBsYWNlaG9sZGVyIiwicm93cyIsImNvbHMiLCJzdWJtaXQiLCJjb250YWN0UGFnZSIsImJveENvbnRlbnQiLCJiYXNrZXRQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==