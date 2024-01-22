package com.penpick;




import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
@Configuration
public class PensionWebConfig implements WebMvcConfigurer{
	@Override
    public void addCorsMappings(CorsRegistry registry) {
		 registry.addMapping("/**")
         .allowedOrigins("http://localhost:3000") // React 애플리케이션의 도메인으로 변경
         .allowedMethods("GET", "POST", "PUT", "DELETE")
         .allowedHeaders("*")
         .allowCredentials(true)
         .maxAge(3600);
 }
}
