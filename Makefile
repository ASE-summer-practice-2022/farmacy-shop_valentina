integrate:
	rm -rf app-backend/public/fonts app-backend/public/images app-backend/public/app.js app-backend/public/app.css
	cp -a app-frontend/build/* app-backend/public/
