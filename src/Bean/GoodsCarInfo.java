package Bean;

public class GoodsCarInfo {
	private String food_id;
	private String food_name;
	private String food_price;
	private String food_img;
	
	public GoodsCarInfo(String food_id, String food_name, String food_price, String food_img) {
		// TODO Auto-generated constructor stub
		this.food_id=food_id;
		this.food_name=food_name;
		this.food_price=food_price;
		this.food_img=food_img;
	}
	public String getFood_id() {
		return food_id;
	}
	public void setFood_id(String food_id) {
		this.food_id = food_id;
	}
	public String getFood_name() {
		return food_name;
	}
	public void setFood_name(String food_name) {
		this.food_name = food_name;
	}
	public String getFood_price() {
		return food_price;
	}
	public void setFood_price(String food_price) {
		this.food_price = food_price;
	}
	public String getFood_img() {
		return food_img;
	}
	public void setFood_img(String food_img) {
		this.food_img = food_img;
	}
}
